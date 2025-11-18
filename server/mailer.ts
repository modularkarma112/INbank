import nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';
import dotenv from 'dotenv';
dotenv.config();


const smtpPort = Number(process.env.SMTP_PORT) || 587;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: smtpPort,
  secure: smtpPort === 465, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

interface NotificacionMovimiento {
  emailCliente: string;
  nombreCliente: string;
  numeroCuenta: string;
  tipoMovimiento: string;
  monto: number;
  saldoActual: number;
  concepto?: string;
  fecha?: Date;

  comprobanteHtml?: string;
 
  comprobantePdf?: Buffer;
}

export async function enviarNotificacionMovimiento(data: NotificacionMovimiento) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️  Email no configurado. Saltando notificación.');
    return;
  }

  const { emailCliente, nombreCliente, numeroCuenta, tipoMovimiento, monto, saldoActual, concepto, fecha, comprobanteHtml } = data;
  const fechaFormato = (fecha || new Date()).toLocaleString('es-MX');

  const asunto = `INBANK - ${tipoMovimiento} en tu cuenta`;
  const cuerpo = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0066cc;">INBANK - Notificación de Movimiento</h2>
      <p>Hola <strong>${nombreCliente}</strong>,</p>
      <p>Se ha realizado un movimiento en tu cuenta:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Tipo de movimiento:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tipoMovimiento}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Monto:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">$${monto.toFixed(2)} MXN</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Saldo actual:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">$${saldoActual.toFixed(2)} MXN</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Número de cuenta:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${numeroCuenta}</td>
        </tr>
        ${concepto ? `
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Concepto:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${concepto}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Fecha y hora:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${fechaFormato}</td>
        </tr>
      </table>
      
      <p style="color: #666; font-size: 12px;">
        Si no reconoces este movimiento, contacta inmediatamente con nosotros.<br>
        Este es un correo automático, por favor no respondas a este mensaje.
      </p>

      <p style="color: #666; font-size: 12px;">
        Se adjunta el comprobante en formato PDF.
      </p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">
        INBANK - Tu banco de confianza<br>
        © ${new Date().getFullYear()} Todos los derechos reservados
      </p>
    </div>
  `;

  try {
    const baseName = `comprobante-${String(tipoMovimiento || 'movimiento')}`
      .toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const attachments = [] as any[];
    if (data.comprobantePdf) {
      try {
        const pdfSize = (data.comprobantePdf as Buffer).length;
        console.log(`📎 Adjuntando PDF (${pdfSize} bytes) para ${tipoMovimiento} -> ${emailCliente}`);
      } catch {}
      attachments.push({ filename: `${baseName}.pdf`, content: data.comprobantePdf, contentType: 'application/pdf' });
    } else if (comprobanteHtml) {
      console.warn(`⚠️  PDF no disponible para ${tipoMovimiento}; adjuntando HTML como respaldo.`);
      attachments.push({ filename: `${baseName}.html`, content: comprobanteHtml, contentType: 'text/html; charset=UTF-8' });
    }

    const mail = {
      from: `"INBANK Notificaciones" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: emailCliente,
      subject: asunto,
      html: cuerpo,
      attachments
    } as nodemailer.SendMailOptions;
    if (!attachments.length) {
      console.warn(`⚠️  Enviando correo SIN adjuntos: no se recibió PDF/HTML para ${tipoMovimiento} (${emailCliente})`);
    }
    await transporter.sendMail(mail);
    console.log(`✅ Email enviado a ${emailCliente} - ${tipoMovimiento}`);
  } catch (error: any) {
    console.error(`❌ Error enviando email a ${emailCliente}:`, error.message);

  }
}


export function renderComprobanteMovimiento(opts: {
  tipo: string;
  monto: number;
  concepto?: string | null;
  numeroCuenta: string;
  nombreCliente: string;
  referencia?: string | number | null;
  fecha?: Date;
}) {
  const { tipo, monto, concepto, numeroCuenta, nombreCliente, referencia, fecha } = opts;
  const f = (fecha || new Date()).toLocaleString('es-MX');
  const ref = referencia != null ? `#${referencia}` : '';
  return `
    <div style="font-family: Arial, sans-serif; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; max-width:680px;">
      <div style="background:linear-gradient(135deg,#0B5EA8 0%,#0EA5E9 100%); color:white; padding:18px 24px; display:flex; align-items:center; gap:12px;">
        <div style="font-size:28px">🏦</div>
        <div>
          <div style="font-weight:700; letter-spacing:.5px;">INBANK</div>
          <div style="font-size:12px; opacity:.9">Comprobante de ${tipo}</div>
        </div>
      </div>
      <div style="padding:18px 24px;">
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f3f5;">
          <div style="color:#6b7280">Monto</div><div style="font-weight:700">$${monto.toFixed(2)} MXN</div>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f3f5;">
          <div style="color:#6b7280">Titular</div><div style="font-weight:600">${nombreCliente}</div>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f3f5;">
          <div style="color:#6b7280">Número de cuenta</div><div style="font-weight:600">${numeroCuenta}</div>
        </div>
        ${concepto ? `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f3f5;"><div style="color:#6b7280">Concepto</div><div style="font-weight:600">${concepto}</div></div>` : ''}
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f1f3f5;">
          <div style="color:#6b7280">Fecha</div><div style="font-weight:600">${f}</div>
        </div>
        ${ref ? `<div style="display:flex; justify-content:space-between; padding:8px 0;"><div style="color:#6b7280">Referencia</div><div style="font-weight:600">${ref}</div></div>` : ''}
      </div>
    </div>
  `;
}


export async function generateComprobanteMovimientoPdf(opts: {
  tipo: string;
  monto: number;
  concepto?: string | null;
  numeroCuenta: string;
  nombreCliente: string;
  referencia?: string | number | null;
  fecha?: Date;
}): Promise<Buffer> {
  const { tipo, monto, concepto, numeroCuenta, nombreCliente, referencia, fecha } = opts;
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const chunks: Buffer[] = [];
  return new Promise<Buffer>((resolve, reject) => {
    doc.on('data', (d: Buffer) => chunks.push(d));
    doc.on('error', reject);
    doc.on('end', () => resolve(Buffer.concat(chunks)));

    // Encabezado
    doc
      .fillColor('#0B5EA8')
      .fontSize(22)
      .text('INBANK', { continued: true })
      .fillColor('#333')
      .fontSize(18)
      .text(`  • Comprobante de ${tipo}`);

    doc.moveDown(0.5);
    const fechaStr = (fecha || new Date()).toLocaleString('es-MX');
    doc.fontSize(10).fillColor('#666').text(`Fecha: ${fechaStr}`);
    if (referencia != null) doc.text(`Referencia: #${referencia}`);

    doc.moveDown(0.5);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#e5e7eb').stroke();
    doc.moveDown(1);


    const row = (label: string, value: string) => {
      doc.fontSize(11).fillColor('#6b7280').text(label, { continued: true });
      const x = doc.x; 
      doc.fillColor('#111827').text(`  ${value}`);
    };
    row('Titular:', nombreCliente);
    row('Número de cuenta:', numeroCuenta);
    row('Monto:', `$${monto.toFixed(2)} MXN`);
    row('Concepto:', concepto ? String(concepto) : 'Sin concepto');

   
    doc.moveDown(1.5);
    doc.fontSize(9).fillColor('#6b7280').text('Si no reconoces este movimiento, contacta inmediatamente con nosotros.');
    doc.end();
  });
}


export async function generateComprobanteTransferenciaPdf(opts: {
  id: number;
  monto: number;
  comision: number;
  concepto?: string | null;
  fecha?: Date;
  tipo: 'Mismo banco' | 'Interbancaria';
  origen_nombre?: string | null;
  origen_numero_cuenta?: string | null;
  destino_nombre: string;
  destino_banco?: string | null;
  destino_identificador_tipo: 'NUMERO_CUENTA' | 'CLABE' | 'TELEFONO';
  destino_identificador: string;
}): Promise<Buffer> {
  const {
    id, monto, comision, concepto, fecha, tipo,
    origen_nombre, origen_numero_cuenta,
    destino_nombre, destino_banco, destino_identificador_tipo, destino_identificador
  } = opts;
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const chunks: Buffer[] = [];
  return new Promise<Buffer>((resolve, reject) => {
    doc.on('data', (d: Buffer) => chunks.push(d));
    doc.on('error', reject);
    doc.on('end', () => resolve(Buffer.concat(chunks)));

    // Encabezado
    doc.fillColor('#0B5EA8').fontSize(22).text('INBANK', { continued: true })
       .fillColor('#333').fontSize(18).text('  • Comprobante de Transferencia');
    doc.moveDown(0.5);
    const fechaStr = (fecha || new Date()).toLocaleString('es-MX');
    doc.fontSize(10).fillColor('#666').text(`Fecha: ${fechaStr}`);
    doc.text(`Referencia: #${id}`);

    // Separador
    doc.moveDown(0.5); doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#e5e7eb').stroke();
    doc.moveDown(1);

    const row = (label: string, value: string) => {
      doc.fontSize(11).fillColor('#6b7280').text(label, { continued: true });
      doc.fillColor('#111827').text(`  ${value}`);
    };

    row('Monto:', `$${monto.toFixed(2)} MXN`);
    row('Comisión:', `$${comision.toFixed(2)} MXN`);
    row('Tipo:', tipo);
    row('Concepto:', concepto ? String(concepto) : 'Sin concepto');
    doc.moveDown(0.5);
    doc.fontSize(12).fillColor('#0B5EA8').text('Cuenta destino');
    row('Nombre:', destino_nombre);
    row('Entidad:', destino_banco || 'INBANK');
    row(destino_identificador_tipo === 'CLABE' ? 'CLABE:' : 'Identificador:', destino_identificador);
    doc.moveDown(0.5);
    doc.fontSize(12).fillColor('#0B5EA8').text('Cuenta origen');
    row('Nombre:', origen_nombre || 'Tu cuenta');
    row('Número de cuenta:', origen_numero_cuenta || '');

    doc.moveDown(1.5);
    doc.fontSize(9).fillColor('#6b7280').text('Si no reconoces esta transferencia, contacta inmediatamente con nosotros.');
    doc.end();
  });
}

interface NotificacionSolicitudPrestamo {
  emailCliente: string;
  nombreCliente: string;
  monto: number;
  plazoMeses: number;
  totalBase: number;
}

export async function enviarNotificacionSolicitudPrestamo(data: NotificacionSolicitudPrestamo) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️  Email no configurado. Saltando notificación de solicitud de préstamo.');
    return;
  }

  const { emailCliente, nombreCliente, monto, plazoMeses, totalBase } = data;
  const asunto = `INBANK - Solicitud de Préstamo recibida`;
  const cuerpo = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0066cc;">INBANK - Solicitud de Préstamo</h2>
      <p>Hola <strong>${nombreCliente}</strong>,</p>
      <p>Hemos recibido tu solicitud de préstamo y se encuentra <strong>en revisión</strong>.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Monto solicitado:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">$${monto.toFixed(2)} MXN</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Plazo:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${plazoMeses} meses</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total estimado (sin mora):</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">$${totalBase.toFixed(2)} MXN</td>
        </tr>
      </table>
      <p style="color: #666; font-size: 12px;">
        Te notificaremos cuando tu solicitud sea aprobada o rechazada. Este es un correo automático, por favor no respondas a este mensaje.
      </p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">
        INBANK - Tu banco de confianza<br>
        © ${new Date().getFullYear()} Todos los derechos reservados
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"INBANK Notificaciones" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: emailCliente,
      subject: asunto,
      html: cuerpo
    });
    console.log(`✅ Email solicitud de préstamo enviado a ${emailCliente}`);
  } catch (error: any) {
    console.error(`❌ Error enviando email de solicitud a ${emailCliente}:`, error.message);
  }
}

interface NotificacionPagoPrestamo {
  emailCliente: string;
  nombreCliente: string;
  monto: number;
  prestamoId: number;
  periodo: string; // e.g. 202511
  saldoPeriodo?: number;
}

export async function enviarNotificacionPagoPrestamo(data: NotificacionPagoPrestamo) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️  Email no configurado. Saltando notificación de pago de préstamo.');
    return;
  }
  const { emailCliente, nombreCliente, monto, prestamoId, periodo, saldoPeriodo } = data;
  const asunto = `INBANK - Pago recibido de préstamo #${prestamoId}`;
  const cuerpo = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0066cc;">INBANK - Pago de Préstamo</h2>
      <p>Hola <strong>${nombreCliente}</strong>,</p>
      <p>Hemos registrado tu pago del periodo <strong>${periodo}</strong> para tu préstamo <strong>#${prestamoId}</strong>.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Monto pagado:</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">$${monto.toFixed(2)} MXN</td>
        </tr>
        ${typeof saldoPeriodo === 'number' ? `
        <tr>
          <td style=\"padding: 10px; border: 1px solid #ddd;\"><strong>Saldo del periodo:</strong></td>
          <td style=\"padding: 10px; border: 1px solid #ddd;\">$${saldoPeriodo.toFixed(2)} MXN</td>
        </tr>` : ''}
      </table>
      <p style="color: #666; font-size: 12px;">Gracias por tu pago. Este es un correo automático, por favor no respondas a este mensaje.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">INBANK • © ${new Date().getFullYear()}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"INBANK Notificaciones" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: emailCliente,
      subject: asunto,
      html: cuerpo
    });
    console.log(`✅ Email pago de préstamo enviado a ${emailCliente}`);
  } catch (error: any) {
    console.error(`❌ Error enviando email de pago a ${emailCliente}:`, error.message);
  }
}

// ===================== ESTADO DE CUENTA =====================
interface NotificacionEstadoCuenta {
  emailCliente: string;
  nombreCliente: string;
  periodoEtiqueta: string; // YYYY-MM o fecha
  comprobantePdf: Buffer;
}

export async function enviarEstadoCuenta(data: NotificacionEstadoCuenta) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️  Email no configurado. Saltando envío de estado de cuenta.');
    return;
  }
  const { emailCliente, nombreCliente, periodoEtiqueta, comprobantePdf } = data;
  const asunto = `INBANK - Estado de cuenta ${periodoEtiqueta}`;
  const cuerpo = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0066cc;">INBANK - Estado de Cuenta</h2>
      <p>Hola <strong>${nombreCliente}</strong>,</p>
      <p>Adjuntamos tu estado de cuenta correspondiente a <strong>${periodoEtiqueta}</strong>.</p>
      <p style="color:#666; font-size:12px;">Este es un correo automático, por favor no respondas a este mensaje.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">INBANK • © ${new Date().getFullYear()}</p>
    </div>
  `;
  try {
    await transporter.sendMail({
      from: `"INBANK Notificaciones" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: emailCliente,
      subject: asunto,
      html: cuerpo,
      attachments: [
        { filename: `estado-cuenta-${periodoEtiqueta}.pdf`, content: comprobantePdf, contentType: 'application/pdf' }
      ]
    });
    console.log(`✅ Estado de cuenta enviado a ${emailCliente} (${periodoEtiqueta})`);
  } catch (error: any) {
    console.error(`❌ Error enviando estado de cuenta a ${emailCliente}:`, error.message);
  }
}

export async function generateEstadoCuentaPdf(data: {
  cliente: { id: number; nombre: string; email?: string | null };
  periodo: { desde: string; hasta: string };
  cuentas: Array<{ id: number; numero_cuenta: string; saldo: number; estatus: string; movimientos: Array<{ id: number; tipo: string; monto: number; concepto: string; fecha: string }>}>
  prestamos: Array<{ id: number; tipo_prestamo: string; monto: number; plazo_meses: number; estatus: string; interes: number; total_estimado: number; pago_mensual_est: number; saldo_pendiente_est: number; }>
  etiqueta?: string;
}): Promise<Buffer> {
  const { cliente, periodo, cuentas, prestamos, etiqueta } = data;
  const doc = new PDFDocument({ size: 'A4', margin: 42 });
  const chunks: Buffer[] = [];
  return new Promise<Buffer>((resolve, reject) => {
    doc.on('data', (d: Buffer) => chunks.push(d));
    doc.on('error', reject);
    doc.on('end', () => resolve(Buffer.concat(chunks)));

    // Header
    doc.fillColor('#0B5EA8').fontSize(22).text('INBANK', { continued: true })
       .fillColor('#333').fontSize(18).text('  • Estado de Cuenta');
    if (etiqueta) {
      doc.moveDown(0.2).fontSize(10).fillColor('#666').text(`Periodo: ${etiqueta}`);
    } else {
      const d = new Date(periodo.desde); const h = new Date(periodo.hasta);
      doc.moveDown(0.2).fontSize(10).fillColor('#666').text(`Periodo: ${d.toLocaleDateString('es-MX')} - ${h.toLocaleDateString('es-MX')}`);
    }
    doc.fontSize(10).fillColor('#666').text(`Cliente: ${cliente.nombre}${cliente.email ? ' • ' + cliente.email : ''}`);
    doc.moveDown(0.5); doc.moveTo(42, doc.y).lineTo(553, doc.y).strokeColor('#e5e7eb').stroke();

    // Cuentas
    doc.moveDown(0.6);
    doc.fontSize(13).fillColor('#0B5EA8').text('Cuentas');
    if (!cuentas || cuentas.length === 0) {
      doc.fontSize(10).fillColor('#6b7280').text('Sin cuentas registradas.');
    }
    for (const c of (cuentas || [])) {
      doc.moveDown(0.4);
      doc.fontSize(11).fillColor('#111827').text(`• ${c.numero_cuenta}  `, { continued: true });
      doc.fontSize(10).fillColor('#6b7280').text(`(${c.estatus || '—'})`);
      doc.fontSize(10).fillColor('#6b7280').text(`Saldo: $${Number(c.saldo).toFixed(2)} MXN`);

      // Tabla de movimientos
      const movs = c.movimientos || [];
      if (movs.length) {
        doc.moveDown(0.2);
        doc.fontSize(10).fillColor('#374151').text('Movimientos del período:');
        // encabezados
        doc.font('Helvetica-Bold').text('Fecha', 42, doc.y + 4, { continued: true })
           .text('Tipo', 150, undefined, { continued: true })
           .text('Concepto', 260, undefined, { continued: true })
           .text('Monto', 470);
        doc.font('Helvetica');
        doc.moveDown(0.2);
        doc.moveTo(42, doc.y).lineTo(553, doc.y).strokeColor('#e5e7eb').stroke();
        for (const m of movs) {
          const f = new Date(m.fecha).toLocaleString('es-MX');
          const y = doc.y + 3;
          doc.text(f, 42, y, { width: 100 });
          doc.text(m.tipo || '', 150, y, { width: 100 });
          doc.text(m.concepto || '', 260, y, { width: 200 });
          doc.text(`$${Number(m.monto).toFixed(2)}`, 470, y, { width: 83, align: 'right' });
          doc.moveDown(0.4);
          if (doc.y > 760) { doc.addPage(); }
        }
      } else {
        doc.fontSize(10).fillColor('#6b7280').text('Sin movimientos en el período.');
      }
    }

    // Préstamos
    doc.addPage();
    doc.fontSize(13).fillColor('#0B5EA8').text('Préstamos');
    if (!prestamos || prestamos.length === 0) {
      doc.fontSize(10).fillColor('#6b7280').text('Sin préstamos registrados.');
    } else {
      for (const p of prestamos) {
        doc.moveDown(0.4);
        doc.fontSize(11).fillColor('#111827').text(`• ${p.tipo_prestamo} (#${p.id})`);
        const row = (label: string, value: string) => {
          doc.fontSize(10).fillColor('#6b7280').text(label, { continued: true });
          doc.fillColor('#111827').text(`  ${value}`);
        };
        row('Estatus:', String(p.estatus || '—'));
        row('Monto:', `$${Number(p.monto).toFixed(2)} MXN`);
        row('Plazo:', `${p.plazo_meses} meses`);
        row('Interés mensual:', `${Number(p.interes).toFixed(2)}%`);
        row('Total estimado:', `$${Number(p.total_estimado).toFixed(2)} MXN`);
        row('Pago mensual estimado:', `$${Number(p.pago_mensual_est).toFixed(2)} MXN`);
        row('Saldo pendiente estimado:', `$${Number(p.saldo_pendiente_est).toFixed(2)} MXN`);
      }
    }

    // Footer
    doc.moveDown(1);
    doc.fontSize(9).fillColor('#6b7280').text('Documento generado automáticamente por INBANK. Para aclaraciones, contacta a soporte.');

    doc.end();
  });
}

export function renderEstadoCuentaHtml(data: {
  cliente: { id: number; nombre: string; email?: string | null };
  periodo: { desde: string; hasta: string };
  cuentas: Array<{ id: number; numero_cuenta: string; saldo: number; estatus: string; movimientos: Array<{ id: number; tipo: string; monto: number; concepto: string; fecha: string }>}>;
  prestamos: Array<{ id: number; tipo_prestamo: string; monto: number; plazo_meses: number; estatus: string; interes: number; total_estimado: number; pago_mensual_est: number; saldo_pendiente_est: number; }>;
  etiqueta?: string;
}) {
  const { cliente, periodo, cuentas, prestamos, etiqueta } = data;
  const desde = new Date(periodo.desde);
  const hasta = new Date(periodo.hasta);
  const periodoStr = etiqueta || `${desde.toLocaleDateString('es-MX')} - ${hasta.toLocaleDateString('es-MX')}`;
  const fmt = (n: number) => n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const esc = (s: any) => String(s ?? '').replace(/[&<>]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;'} as any)[c]);
  const movimientosTabla = (movs: any[]) => {
    if (!movs || !movs.length) return '<div style="color:#6b7280">Sin movimientos en el período.</div>';
    return `
      <table style="width:100%; border-collapse:collapse; font-size:13px;">
        <thead>
          <tr style="background:#f3f4f6; text-align:left;">
            <th style="padding:8px; border:1px solid #e5e7eb;">Fecha</th>
            <th style="padding:8px; border:1px solid #e5e7eb;">Tipo</th>
            <th style="padding:8px; border:1px solid #e5e7eb;">Concepto</th>
            <th style="padding:8px; border:1px solid #e5e7eb; text-align:right;">Monto</th>
          </tr>
        </thead>
        <tbody>
          ${movs.map(m => `
            <tr>
              <td style="padding:8px; border:1px solid #e5e7eb;">${new Date(m.fecha).toLocaleString('es-MX')}</td>
              <td style="padding:8px; border:1px solid #e5e7eb;">${esc(m.tipo)}</td>
              <td style="padding:8px; border:1px solid #e5e7eb;">${esc(m.concepto)}</td>
              <td style="padding:8px; border:1px solid #e5e7eb; text-align:right;">$${fmt(Number(m.monto))}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    `;
  };

  return `
  <div style="font-family:Arial, sans-serif; max-width:900px; margin:0 auto; color:#111827;">
    <div style="background:linear-gradient(135deg,#0B5EA8 0%,#0EA5E9 100%); color:#fff; padding:16px 20px; border-radius:8px;">
      <div style="font-size:22px; font-weight:700; letter-spacing:.5px;">INBANK</div>
      <div style="opacity:.95;">Estado de Cuenta</div>
      <div style="font-size:12px; opacity:.9;">Periodo: ${esc(periodoStr)}</div>
      <div style="font-size:12px; opacity:.9;">Cliente: ${esc(cliente.nombre)}${cliente.email ? ' • ' + esc(cliente.email) : ''}</div>
    </div>

    <div style="margin-top:16px;">
      <h3 style="color:#0B5EA8; margin:8px 0;">Cuentas</h3>
      ${(!cuentas || !cuentas.length) ? '<div style="color:#6b7280">Sin cuentas registradas.</div>' : ''}
      ${ (cuentas || []).map(c => `
        <div style="border:1px solid #e5e7eb; border-radius:8px; padding:12px; margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:600;">${esc(c.numero_cuenta)} <span style="color:#6b7280; font-weight:400;">(${esc(c.estatus)})</span></div>
            <div><strong>Saldo:</strong> $${fmt(Number(c.saldo))} MXN</div>
          </div>
          <div style="margin-top:10px;">
            <div style="color:#374151; font-weight:600; margin-bottom:6px;">Movimientos del período</div>
            ${movimientosTabla(c.movimientos || [])}
          </div>
        </div>`).join('') }
    </div>

    <div style="margin-top:16px;">
      <h3 style="color:#0B5EA8; margin:8px 0;">Préstamos</h3>
      ${(!prestamos || !prestamos.length) ? '<div style="color:#6b7280">Sin préstamos registrados.</div>' : ''}
      ${(prestamos || []).map(p => `
        <div style="border:1px solid #e5e7eb; border-radius:8px; padding:12px; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div><strong>${esc(p.tipo_prestamo)}</strong> <span style="color:#6b7280;">#${p.id}</span></div>
            <span style="padding:2px 8px; border-radius:12px; background:${String(p.estatus).toUpperCase()==='PAGADO'?'#10b981':'#f59e0b'}; color:#fff; font-size:12px;">${esc(p.estatus)}</span>
          </div>
          <div style="font-size:13px; color:#374151; margin-top:4px;">Plazo: ${p.plazo_meses} meses • Interés mensual: ${Number(p.interes).toFixed(2)}%</div>
          <div style="font-size:13px;">Monto: $${fmt(Number(p.monto))} • Total estimado: $${fmt(Number(p.total_estimado))}</div>
          <div style="font-size:13px;">Pago mensual estimado: $${fmt(Number(p.pago_mensual_est))} • Saldo pendiente estimado: $${fmt(Number(p.saldo_pendiente_est))}</div>
        </div>`).join('')}
    </div>

    <div style="margin-top:18px; color:#6b7280; font-size:12px;">Documento generado automáticamente por INBANK.</div>
  </div>
  `;
}
