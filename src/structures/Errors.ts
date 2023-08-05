export class InvalidCredentialsError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'InvalidCredentialsError'
    }
}

export class ChannelNotFoundError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'ChannelNotFoundError'
    }
}

export class CategoryError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'CategoryError'
    }
}

export class ApiError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'ApiError'
    }
}