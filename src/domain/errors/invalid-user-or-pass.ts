export class InvalidUserOrPass extends Error {
    constructor(msg: string) {
        super(msg)
    }
}