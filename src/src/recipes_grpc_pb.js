// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_recipes_pb = require('../src/recipes_pb.js');

function serialize_recipes_CreateRecipeRequest(arg) {
  if (!(arg instanceof src_recipes_pb.CreateRecipeRequest)) {
    throw new Error('Expected argument of type recipes.CreateRecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_CreateRecipeRequest(buffer_arg) {
  return src_recipes_pb.CreateRecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_CreateRecipeResponse(arg) {
  if (!(arg instanceof src_recipes_pb.CreateRecipeResponse)) {
    throw new Error('Expected argument of type recipes.CreateRecipeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_CreateRecipeResponse(buffer_arg) {
  return src_recipes_pb.CreateRecipeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_DeleteRecipeRequest(arg) {
  if (!(arg instanceof src_recipes_pb.DeleteRecipeRequest)) {
    throw new Error('Expected argument of type recipes.DeleteRecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_DeleteRecipeRequest(buffer_arg) {
  return src_recipes_pb.DeleteRecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_DeleteRecipeResponse(arg) {
  if (!(arg instanceof src_recipes_pb.DeleteRecipeResponse)) {
    throw new Error('Expected argument of type recipes.DeleteRecipeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_DeleteRecipeResponse(buffer_arg) {
  return src_recipes_pb.DeleteRecipeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_GetRecipeRequest(arg) {
  if (!(arg instanceof src_recipes_pb.GetRecipeRequest)) {
    throw new Error('Expected argument of type recipes.GetRecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_GetRecipeRequest(buffer_arg) {
  return src_recipes_pb.GetRecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_GetRecipeResponse(arg) {
  if (!(arg instanceof src_recipes_pb.GetRecipeResponse)) {
    throw new Error('Expected argument of type recipes.GetRecipeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_GetRecipeResponse(buffer_arg) {
  return src_recipes_pb.GetRecipeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_UpdateRecipeRequest(arg) {
  if (!(arg instanceof src_recipes_pb.UpdateRecipeRequest)) {
    throw new Error('Expected argument of type recipes.UpdateRecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_UpdateRecipeRequest(buffer_arg) {
  return src_recipes_pb.UpdateRecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipes_UpdateRecipeResponse(arg) {
  if (!(arg instanceof src_recipes_pb.UpdateRecipeResponse)) {
    throw new Error('Expected argument of type recipes.UpdateRecipeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipes_UpdateRecipeResponse(buffer_arg) {
  return src_recipes_pb.UpdateRecipeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecipeServiceService = exports.RecipeServiceService = {
  getRecipe: {
    path: '/recipes.RecipeService/GetRecipe',
    requestStream: false,
    responseStream: false,
    requestType: src_recipes_pb.GetRecipeRequest,
    responseType: src_recipes_pb.GetRecipeResponse,
    requestSerialize: serialize_recipes_GetRecipeRequest,
    requestDeserialize: deserialize_recipes_GetRecipeRequest,
    responseSerialize: serialize_recipes_GetRecipeResponse,
    responseDeserialize: deserialize_recipes_GetRecipeResponse,
  },
  createRecipe: {
    path: '/recipes.RecipeService/CreateRecipe',
    requestStream: false,
    responseStream: false,
    requestType: src_recipes_pb.CreateRecipeRequest,
    responseType: src_recipes_pb.CreateRecipeResponse,
    requestSerialize: serialize_recipes_CreateRecipeRequest,
    requestDeserialize: deserialize_recipes_CreateRecipeRequest,
    responseSerialize: serialize_recipes_CreateRecipeResponse,
    responseDeserialize: deserialize_recipes_CreateRecipeResponse,
  },
  updateRecipe: {
    path: '/recipes.RecipeService/UpdateRecipe',
    requestStream: false,
    responseStream: false,
    requestType: src_recipes_pb.UpdateRecipeRequest,
    responseType: src_recipes_pb.UpdateRecipeResponse,
    requestSerialize: serialize_recipes_UpdateRecipeRequest,
    requestDeserialize: deserialize_recipes_UpdateRecipeRequest,
    responseSerialize: serialize_recipes_UpdateRecipeResponse,
    responseDeserialize: deserialize_recipes_UpdateRecipeResponse,
  },
  deleteRecipe: {
    path: '/recipes.RecipeService/DeleteRecipe',
    requestStream: false,
    responseStream: false,
    requestType: src_recipes_pb.DeleteRecipeRequest,
    responseType: src_recipes_pb.DeleteRecipeResponse,
    requestSerialize: serialize_recipes_DeleteRecipeRequest,
    requestDeserialize: deserialize_recipes_DeleteRecipeRequest,
    responseSerialize: serialize_recipes_DeleteRecipeResponse,
    responseDeserialize: deserialize_recipes_DeleteRecipeResponse,
  },
};

exports.RecipeServiceClient = grpc.makeGenericClientConstructor(RecipeServiceService);
