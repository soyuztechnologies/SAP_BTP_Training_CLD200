/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * FunctionResult
 */
export interface FunctionResult<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Indicator.
   */
  boolean: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
}

/**
 * FunctionResultField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class FunctionResultField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  FunctionResult,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link FunctionResult.boolean} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  boolean: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('Boolean', 'Edm.Boolean', false);

  /**
   * Creates an instance of FunctionResultField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, FunctionResult, fieldOptions);
  }
}

export namespace FunctionResult {
  /**
   * Metadata information on all properties of the `FunctionResult` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FunctionResult>[] = [
    {
      originalName: 'Boolean',
      name: 'boolean',
      type: 'Edm.Boolean',
      isCollection: false
    }
  ];
}
