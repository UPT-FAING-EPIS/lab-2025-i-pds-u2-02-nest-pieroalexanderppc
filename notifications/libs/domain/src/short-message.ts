import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase que representa un mensaje corto.
 * Este tipo de mensaje valida que su longitud no supere los 25 caracteres antes de ser enviado.
 * Utiliza una implementación de IMessageSender para realizar el envío (como SMS o Email).
 */
export class ShortMessage extends AbstractMessage {
  /**
   * Mensaje de error mostrado cuando el mensaje excede los 25 caracteres.
   */
  public LARGE_ERROR_MESSAGE: string = "Unable to send the message as length > 25 characters";

  /**
   * Constructor que recibe una implementación de IMessageSender.
   * @param messageSender Mecanismo de envío del mensaje (SMS, Email, etc.)
   */
  constructor(messageSender: IMessageSender) {
    super();
    this._messageSender = messageSender;
  }

  /**
   * Envía el mensaje si su longitud es menor o igual a 25 caracteres.
   * 
   * @param Message Contenido del mensaje a enviar.
   * @returns Texto de confirmación del envío.
   * @throws Error si el mensaje tiene más de 25 caracteres.
   */
  public SendMessage(Message: string): string {
    if (Message.length <= 25)
      return this._messageSender.SendMessage(Message);
    else
      throw new Error(this.LARGE_ERROR_MESSAGE);
  }
}
