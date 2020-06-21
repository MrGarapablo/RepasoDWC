export interface Iusuarios {
    dniCliente: string;
    nombre: string;
    direccion: string;
    email: string;
    pwd: string;
}

export interface ResponseClientes {
    clientes: Iusuarios[];
}
