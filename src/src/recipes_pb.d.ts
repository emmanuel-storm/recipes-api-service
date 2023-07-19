// package: recipes
// file: src/recipes.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Recipe extends jspb.Message { 
    getId(): string;
    setId(value: string): Recipe;
    getTitle(): string;
    setTitle(value: string): Recipe;
    getDescription(): string;
    setDescription(value: string): Recipe;
    clearIngredientsList(): void;
    getIngredientsList(): Array<string>;
    setIngredientsList(value: Array<string>): Recipe;
    addIngredients(value: string, index?: number): string;
    getInstructions(): string;
    setInstructions(value: string): Recipe;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recipe.AsObject;
    static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recipe;
    static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
        ingredientsList: Array<string>,
        instructions: string,
    }
}

export class GetRecipeRequest extends jspb.Message { 
    getRecipeId(): string;
    setRecipeId(value: string): GetRecipeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
    static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
    export type AsObject = {
        recipeId: string,
    }
}

export class GetRecipeResponse extends jspb.Message { 

    hasRecipe(): boolean;
    clearRecipe(): void;
    getRecipe(): Recipe | undefined;
    setRecipe(value?: Recipe): GetRecipeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecipeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecipeResponse): GetRecipeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecipeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecipeResponse;
    static deserializeBinaryFromReader(message: GetRecipeResponse, reader: jspb.BinaryReader): GetRecipeResponse;
}

export namespace GetRecipeResponse {
    export type AsObject = {
        recipe?: Recipe.AsObject,
    }
}

export class CreateRecipeRequest extends jspb.Message { 

    hasRecipe(): boolean;
    clearRecipe(): void;
    getRecipe(): Recipe | undefined;
    setRecipe(value?: Recipe): CreateRecipeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
    static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
    export type AsObject = {
        recipe?: Recipe.AsObject,
    }
}

export class CreateRecipeResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): CreateRecipeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRecipeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRecipeResponse): CreateRecipeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRecipeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRecipeResponse;
    static deserializeBinaryFromReader(message: CreateRecipeResponse, reader: jspb.BinaryReader): CreateRecipeResponse;
}

export namespace CreateRecipeResponse {
    export type AsObject = {
        message: string,
    }
}

export class UpdateRecipeRequest extends jspb.Message { 
    getRecipeId(): string;
    setRecipeId(value: string): UpdateRecipeRequest;

    hasRecipe(): boolean;
    clearRecipe(): void;
    getRecipe(): Recipe | undefined;
    setRecipe(value?: Recipe): UpdateRecipeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRecipeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRecipeRequest): UpdateRecipeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRecipeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRecipeRequest;
    static deserializeBinaryFromReader(message: UpdateRecipeRequest, reader: jspb.BinaryReader): UpdateRecipeRequest;
}

export namespace UpdateRecipeRequest {
    export type AsObject = {
        recipeId: string,
        recipe?: Recipe.AsObject,
    }
}

export class UpdateRecipeResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): UpdateRecipeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRecipeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRecipeResponse): UpdateRecipeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRecipeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRecipeResponse;
    static deserializeBinaryFromReader(message: UpdateRecipeResponse, reader: jspb.BinaryReader): UpdateRecipeResponse;
}

export namespace UpdateRecipeResponse {
    export type AsObject = {
        message: string,
    }
}

export class DeleteRecipeRequest extends jspb.Message { 
    getRecipeId(): string;
    setRecipeId(value: string): DeleteRecipeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRecipeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRecipeRequest): DeleteRecipeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRecipeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRecipeRequest;
    static deserializeBinaryFromReader(message: DeleteRecipeRequest, reader: jspb.BinaryReader): DeleteRecipeRequest;
}

export namespace DeleteRecipeRequest {
    export type AsObject = {
        recipeId: string,
    }
}

export class DeleteRecipeResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): DeleteRecipeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRecipeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRecipeResponse): DeleteRecipeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRecipeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRecipeResponse;
    static deserializeBinaryFromReader(message: DeleteRecipeResponse, reader: jspb.BinaryReader): DeleteRecipeResponse;
}

export namespace DeleteRecipeResponse {
    export type AsObject = {
        message: string,
    }
}
