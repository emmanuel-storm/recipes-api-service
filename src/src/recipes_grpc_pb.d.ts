// package: recipes
// file: src/recipes.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_recipes_pb from "../src/recipes_pb";

interface IRecipeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getRecipe: IRecipeServiceService_IGetRecipe;
    createRecipe: IRecipeServiceService_ICreateRecipe;
    updateRecipe: IRecipeServiceService_IUpdateRecipe;
    deleteRecipe: IRecipeServiceService_IDeleteRecipe;
}

interface IRecipeServiceService_IGetRecipe extends grpc.MethodDefinition<src_recipes_pb.GetRecipeRequest, src_recipes_pb.GetRecipeResponse> {
    path: "/recipes.RecipeService/GetRecipe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_recipes_pb.GetRecipeRequest>;
    requestDeserialize: grpc.deserialize<src_recipes_pb.GetRecipeRequest>;
    responseSerialize: grpc.serialize<src_recipes_pb.GetRecipeResponse>;
    responseDeserialize: grpc.deserialize<src_recipes_pb.GetRecipeResponse>;
}
interface IRecipeServiceService_ICreateRecipe extends grpc.MethodDefinition<src_recipes_pb.CreateRecipeRequest, src_recipes_pb.CreateRecipeResponse> {
    path: "/recipes.RecipeService/CreateRecipe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_recipes_pb.CreateRecipeRequest>;
    requestDeserialize: grpc.deserialize<src_recipes_pb.CreateRecipeRequest>;
    responseSerialize: grpc.serialize<src_recipes_pb.CreateRecipeResponse>;
    responseDeserialize: grpc.deserialize<src_recipes_pb.CreateRecipeResponse>;
}
interface IRecipeServiceService_IUpdateRecipe extends grpc.MethodDefinition<src_recipes_pb.UpdateRecipeRequest, src_recipes_pb.UpdateRecipeResponse> {
    path: "/recipes.RecipeService/UpdateRecipe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_recipes_pb.UpdateRecipeRequest>;
    requestDeserialize: grpc.deserialize<src_recipes_pb.UpdateRecipeRequest>;
    responseSerialize: grpc.serialize<src_recipes_pb.UpdateRecipeResponse>;
    responseDeserialize: grpc.deserialize<src_recipes_pb.UpdateRecipeResponse>;
}
interface IRecipeServiceService_IDeleteRecipe extends grpc.MethodDefinition<src_recipes_pb.DeleteRecipeRequest, src_recipes_pb.DeleteRecipeResponse> {
    path: "/recipes.RecipeService/DeleteRecipe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_recipes_pb.DeleteRecipeRequest>;
    requestDeserialize: grpc.deserialize<src_recipes_pb.DeleteRecipeRequest>;
    responseSerialize: grpc.serialize<src_recipes_pb.DeleteRecipeResponse>;
    responseDeserialize: grpc.deserialize<src_recipes_pb.DeleteRecipeResponse>;
}

export const RecipeServiceService: IRecipeServiceService;

export interface IRecipeServiceServer {
    getRecipe: grpc.handleUnaryCall<src_recipes_pb.GetRecipeRequest, src_recipes_pb.GetRecipeResponse>;
    createRecipe: grpc.handleUnaryCall<src_recipes_pb.CreateRecipeRequest, src_recipes_pb.CreateRecipeResponse>;
    updateRecipe: grpc.handleUnaryCall<src_recipes_pb.UpdateRecipeRequest, src_recipes_pb.UpdateRecipeResponse>;
    deleteRecipe: grpc.handleUnaryCall<src_recipes_pb.DeleteRecipeRequest, src_recipes_pb.DeleteRecipeResponse>;
}

export interface IRecipeServiceClient {
    getRecipe(request: src_recipes_pb.GetRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.GetRecipeResponse) => void): grpc.ClientUnaryCall;
    getRecipe(request: src_recipes_pb.GetRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.GetRecipeResponse) => void): grpc.ClientUnaryCall;
    getRecipe(request: src_recipes_pb.GetRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.GetRecipeResponse) => void): grpc.ClientUnaryCall;
    createRecipe(request: src_recipes_pb.CreateRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    createRecipe(request: src_recipes_pb.CreateRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    createRecipe(request: src_recipes_pb.CreateRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    updateRecipe(request: src_recipes_pb.UpdateRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.UpdateRecipeResponse) => void): grpc.ClientUnaryCall;
    updateRecipe(request: src_recipes_pb.UpdateRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.UpdateRecipeResponse) => void): grpc.ClientUnaryCall;
    updateRecipe(request: src_recipes_pb.UpdateRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.UpdateRecipeResponse) => void): grpc.ClientUnaryCall;
    deleteRecipe(request: src_recipes_pb.DeleteRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.DeleteRecipeResponse) => void): grpc.ClientUnaryCall;
    deleteRecipe(request: src_recipes_pb.DeleteRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.DeleteRecipeResponse) => void): grpc.ClientUnaryCall;
    deleteRecipe(request: src_recipes_pb.DeleteRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.DeleteRecipeResponse) => void): grpc.ClientUnaryCall;
}

export class RecipeServiceClient extends grpc.Client implements IRecipeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getRecipe(request: src_recipes_pb.GetRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.GetRecipeResponse) => void): grpc.ClientUnaryCall;
    public getRecipe(request: src_recipes_pb.GetRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.GetRecipeResponse) => void): grpc.ClientUnaryCall;
    public getRecipe(request: src_recipes_pb.GetRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.GetRecipeResponse) => void): grpc.ClientUnaryCall;
    public createRecipe(request: src_recipes_pb.CreateRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    public createRecipe(request: src_recipes_pb.CreateRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    public createRecipe(request: src_recipes_pb.CreateRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.CreateRecipeResponse) => void): grpc.ClientUnaryCall;
    public updateRecipe(request: src_recipes_pb.UpdateRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.UpdateRecipeResponse) => void): grpc.ClientUnaryCall;
    public updateRecipe(request: src_recipes_pb.UpdateRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.UpdateRecipeResponse) => void): grpc.ClientUnaryCall;
    public updateRecipe(request: src_recipes_pb.UpdateRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.UpdateRecipeResponse) => void): grpc.ClientUnaryCall;
    public deleteRecipe(request: src_recipes_pb.DeleteRecipeRequest, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.DeleteRecipeResponse) => void): grpc.ClientUnaryCall;
    public deleteRecipe(request: src_recipes_pb.DeleteRecipeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.DeleteRecipeResponse) => void): grpc.ClientUnaryCall;
    public deleteRecipe(request: src_recipes_pb.DeleteRecipeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_recipes_pb.DeleteRecipeResponse) => void): grpc.ClientUnaryCall;
}
