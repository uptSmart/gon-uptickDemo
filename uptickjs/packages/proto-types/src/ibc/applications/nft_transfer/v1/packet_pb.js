// source: ibc/applications/nft_transfer/v1/packet.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.repeatedFields_, null);
};
goog.inherits(proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.displayName = 'proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.repeatedFields_ = [4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.toObject = function(includeInstance, msg) {
  var f, obj = {
    classId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    classUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    classData: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tokenIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    tokenUrisList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    tokenDataList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    sender: jspb.Message.getFieldWithDefault(msg, 7, ""),
    receiver: jspb.Message.getFieldWithDefault(msg, 8, ""),
    memo: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData;
  return proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassUri(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassData(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokenIds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokenUris(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokenData(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClassId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClassUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClassData();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTokenIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getTokenUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getTokenDataList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string class_id = 1;
 * @return {string}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getClassId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setClassId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string class_uri = 2;
 * @return {string}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getClassUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setClassUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string class_data = 3;
 * @return {string}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getClassData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setClassData = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string token_ids = 4;
 * @return {!Array<string>}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getTokenIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setTokenIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.addTokenIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.clearTokenIdsList = function() {
  return this.setTokenIdsList([]);
};


/**
 * repeated string token_uris = 5;
 * @return {!Array<string>}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getTokenUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setTokenUrisList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.addTokenUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.clearTokenUrisList = function() {
  return this.setTokenUrisList([]);
};


/**
 * repeated string token_data = 6;
 * @return {!Array<string>}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getTokenDataList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setTokenDataList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.addTokenData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.clearTokenDataList = function() {
  return this.setTokenDataList([]);
};


/**
 * optional string sender = 7;
 * @return {string}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string receiver = 8;
 * @return {string}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string memo = 9;
 * @return {string}
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData} returns this
 */
proto.ibc.applications.nft_transfer.v1.NonFungibleTokenPacketData.prototype.setMemo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.ibc.applications.nft_transfer.v1);
