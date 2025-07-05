/**
 * Representa un cliente en el sistema.
 */
export class Customer {
    /**
     * Nombre completo del cliente.
     */
    public Name: string;
  
    /**
     * Correo electrónico del cliente.
     */
    public Email: string;
  
    /**
     * Número de teléfono móvil.
     */
    public MobileNumber: string;
  
    /**
     * Dirección física del cliente.
     */
    public Address: string;
  
    /**
     * Contraseña del cliente.
     */
    public Password: string;
  
    /**
     * Crea una nueva instancia de un cliente.
     * @param name Nombre del cliente
     * @param email Correo electrónico del cliente
     * @param mobileNumber Número móvil del cliente
     * @param address Dirección del cliente
     * @param password Contraseña del cliente
     * @returns Un nuevo objeto Customer
     */
    public static Create(
      name: string,
      email: string,
      mobileNumber: string,
      address: string,
      password: string
    ): Customer {
      const c = new Customer();
      c.Name = name;
      c.Email = email; 
      c.MobileNumber = mobileNumber; 
      c.Address = address; 
      c.Password = password;
      return c;
    }
  }
  