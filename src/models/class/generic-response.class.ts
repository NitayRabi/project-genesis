export class GenericResponse<T> {
    success: boolean;
    constructor(public body: T) {
        this.success = !(body instanceof Error);
    }
}
