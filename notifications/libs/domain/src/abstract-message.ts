import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase abstracta que representa un mensaje que puede ser enviado mediante distintos métodos (SMS, Email, etc.).
 * 
 * Esta clase define la interfaz para enviar mensajes, delegando el envío real a un objeto que implementa `IMessageSender`.
 * Las subclases concretas deben implementar la lógica específica de envío.
 */
export abstract class AbstractMessage {
  /**
   * Referencia al objeto que se encarga de enviar el mensaje.
   */
  protected _messageSender: IMessageSender;

  /**
   * Método abstracto para enviar un mensaje.
   * Debe ser implementado por las clases concretas que extienden de AbstractMessage.
   * 
   * @param Message Contenido del mensaje a enviar.
   * @returns Una cadena con el resultado del envío.
   */
  public abstract SendMessage(Message: string): string;
}
