export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConstraintNumber: any;
  ConstraintString: any;
  DateTime: any;
  Upload: any;
};

export type AckDetails = {
  __typename?: 'AckDetails';
  rate?: Maybe<Scalars['Float']>;
};

export type AppDebugDistribution = {
  __typename?: 'AppDebugDistribution';
  label: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

export type AppDebugStatistics = {
  __typename?: 'AppDebugStatistics';
  objects?: Maybe<Array<Maybe<AppDebugDistribution>>>;
  relationships?: Maybe<Array<Maybe<AppDebugDistribution>>>;
};

/** Retrieve the application information version add dependencies */
export type AppInfo = {
  __typename?: 'AppInfo';
  /** The objects statistics */
  debugStats?: Maybe<AppDebugStatistics>;
  /** The list of OpenCTI software dependencies */
  dependencies: Array<DependencyVersion>;
  /** The OpenCTI api current memory usage */
  memory?: Maybe<AppMemory>;
  /** The OpenCTI aplication version */
  version: Scalars['String'];
};

/**
 * NodeJs memory.
 * https://nodejs.org/api/process.html#process_process_memoryusage
 * https://nodejs.org/docs/latest-v11.x/api/v8.html#v8_v8_getheapstatistics
 */
export type AppMemory = {
  __typename?: 'AppMemory';
  arrayBuffers?: Maybe<Scalars['Float']>;
  does_zap_garbage?: Maybe<Scalars['Float']>;
  external?: Maybe<Scalars['Float']>;
  heapTotal?: Maybe<Scalars['Float']>;
  heapUsed?: Maybe<Scalars['Float']>;
  heap_size_limit?: Maybe<Scalars['Float']>;
  malloced_memory?: Maybe<Scalars['Float']>;
  peak_malloced_memory?: Maybe<Scalars['Float']>;
  rss?: Maybe<Scalars['Float']>;
  total_available_size?: Maybe<Scalars['Float']>;
  total_heap_size?: Maybe<Scalars['Float']>;
  total_heap_size_executable?: Maybe<Scalars['Float']>;
  total_physical_size?: Maybe<Scalars['Float']>;
  used_heap_size?: Maybe<Scalars['Float']>;
};

export type Artifact = BasicObject & HashedObservable & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'Artifact';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  decryption_key?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  encryption_algorithm?: Maybe<Scalars['String']>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  hashes?: Maybe<Array<Maybe<Hash>>>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  mime_type?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  payload_bin?: Maybe<Scalars['String']>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  x_opencti_additional_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ArtifactConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ArtifactExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ArtifactStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArtifactStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArtifactAddInput = {
  decryption_key?: InputMaybe<Scalars['String']>;
  encryption_algorithm?: InputMaybe<Scalars['String']>;
  hashes?: InputMaybe<Array<InputMaybe<HashInput>>>;
  mime_type?: InputMaybe<Scalars['String']>;
  payload_bin?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  x_opencti_additional_names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AttackPattern = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'AttackPattern';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  coursesOfAction?: Maybe<CourseOfActionConnection>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  isSubAttackPattern?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parentAttackPatterns?: Maybe<AttackPatternConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  subAttackPatterns?: Maybe<AttackPatternConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_mitre_detection?: Maybe<Scalars['String']>;
  x_mitre_id?: Maybe<Scalars['String']>;
  x_mitre_permissions_required?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_mitre_platforms?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type AttackPatternConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type AttackPatternExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AttackPatternStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AttackPatternAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_mitre_detection?: InputMaybe<Scalars['String']>;
  x_mitre_id?: InputMaybe<Scalars['String']>;
  x_mitre_permissions_required?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_mitre_platforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AttackPatternConnection = {
  __typename?: 'AttackPatternConnection';
  edges?: Maybe<Array<Maybe<AttackPatternEdge>>>;
  pageInfo: PageInfo;
};

export type AttackPatternEdge = {
  __typename?: 'AttackPatternEdge';
  cursor: Scalars['String'];
  node: AttackPattern;
};

export type AttackPatternEditMutations = {
  __typename?: 'AttackPatternEditMutations';
  contextClean?: Maybe<AttackPattern>;
  contextPatch?: Maybe<AttackPattern>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<AttackPattern>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<AttackPattern>;
};


export type AttackPatternEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type AttackPatternEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AttackPatternEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type AttackPatternEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum AttackPatternsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  MitigatedBy = 'mitigatedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XMitreId = 'x_mitre_id'
}

export type AttackPatternsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: AttackPatternsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum AttackPatternsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XMitreId = 'x_mitre_id'
}

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['ID'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AttributeConnection = {
  __typename?: 'AttributeConnection';
  edges?: Maybe<Array<Maybe<AttributeEdge>>>;
  pageInfo: PageInfo;
};

export type AttributeEdge = {
  __typename?: 'AttributeEdge';
  cursor: Scalars['String'];
  node: Attribute;
};

export type AttributeEditMutations = {
  __typename?: 'AttributeEditMutations';
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Attribute>;
};


export type AttributeEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum AttributesOrdering {
  Value = 'value'
}

export type AutonomousSystem = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'AutonomousSystem';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  number: Scalars['Int'];
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  rir?: Maybe<Scalars['String']>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type AutonomousSystemConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type AutonomousSystemExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type AutonomousSystemStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AutonomousSystemStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AutonomousSystemAddInput = {
  name?: InputMaybe<Scalars['String']>;
  number: Scalars['Int'];
  rir?: InputMaybe<Scalars['String']>;
};

export type BasicObject = {
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
};

export type BasicRelationship = {
  created_at: Scalars['DateTime'];
  entity_type: Scalars['String'];
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  toRole?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type Campaign = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Campaign';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['DateTime']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objective?: Maybe<Scalars['String']>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CampaignConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type CampaignExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CampaignStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CampaignAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  lang?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objective?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CampaignConnection = {
  __typename?: 'CampaignConnection';
  edges?: Maybe<Array<Maybe<CampaignEdge>>>;
  pageInfo: PageInfo;
};

export type CampaignEdge = {
  __typename?: 'CampaignEdge';
  cursor: Scalars['String'];
  node: Campaign;
};

export type CampaignEditMutations = {
  __typename?: 'CampaignEditMutations';
  contextClean?: Maybe<Campaign>;
  contextPatch?: Maybe<Campaign>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Campaign>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Campaign>;
};


export type CampaignEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type CampaignEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CampaignEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type CampaignEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum CampaignsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type CampaignsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: CampaignsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CampaignsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  LastSeen = 'last_seen',
  Modified = 'modified',
  Name = 'name',
  RolePlayed = 'role_played',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export enum Capabilities {
  Connectorapi = 'CONNECTORAPI',
  Explore = 'EXPLORE',
  ExploreExupdate = 'EXPLORE_EXUPDATE',
  ExploreExupdateExdelete = 'EXPLORE_EXUPDATE_EXDELETE',
  Knowledge = 'KNOWLEDGE',
  KnowledgeKnaskimport = 'KNOWLEDGE_KNASKIMPORT',
  KnowledgeKnenrichment = 'KNOWLEDGE_KNENRICHMENT',
  KnowledgeKngetexport = 'KNOWLEDGE_KNGETEXPORT',
  KnowledgeKngetexportKnaskexport = 'KNOWLEDGE_KNGETEXPORT_KNASKEXPORT',
  KnowledgeKnupdate = 'KNOWLEDGE_KNUPDATE',
  KnowledgeKnupdateKndelete = 'KNOWLEDGE_KNUPDATE_KNDELETE',
  KnowledgeKnupload = 'KNOWLEDGE_KNUPLOAD',
  Modules = 'MODULES',
  ModulesModmanage = 'MODULES_MODMANAGE',
  Settings = 'SETTINGS',
  SettingsSetaccesses = 'SETTINGS_SETACCESSES',
  SettingsSetlabels = 'SETTINGS_SETLABELS',
  SettingsSetmarkings = 'SETTINGS_SETMARKINGS',
  TaxiiapiSetcollections = 'TAXIIAPI_SETCOLLECTIONS'
}

export type Capability = BasicObject & InternalObject & {
  __typename?: 'Capability';
  attribute_order?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type CapabilityConnection = {
  __typename?: 'CapabilityConnection';
  edges?: Maybe<Array<Maybe<CapabilityEdge>>>;
  pageInfo: PageInfo;
};

export type CapabilityEdge = {
  __typename?: 'CapabilityEdge';
  cursor: Scalars['String'];
  node: Capability;
};

export enum CitiesFilter {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type CitiesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: CitiesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CitiesOrdering {
  Aliases = 'aliases',
  Created = 'created',
  CreatedAt = 'created_at',
  Description = 'description',
  Modified = 'modified',
  Name = 'name',
  ObjectLabel = 'objectLabel',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type City = BasicObject & Location & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'City';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  country?: Maybe<Country>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  precision?: Maybe<Scalars['Float']>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CityConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type CityExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CityStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CityAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  precision?: InputMaybe<Scalars['Float']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CityConnection = {
  __typename?: 'CityConnection';
  edges?: Maybe<Array<Maybe<CityEdge>>>;
  pageInfo: PageInfo;
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String'];
  node: City;
};

export type CityEditMutations = {
  __typename?: 'CityEditMutations';
  contextClean?: Maybe<City>;
  contextPatch?: Maybe<City>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<City>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<City>;
};


export type CityEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type CityEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CityEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type CityEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export type Connector = BasicObject & InternalObject & {
  __typename?: 'Connector';
  active?: Maybe<Scalars['Boolean']>;
  auto?: Maybe<Scalars['Boolean']>;
  config?: Maybe<ConnectorConfig>;
  connector_scope?: Maybe<Array<Scalars['String']>>;
  connector_state?: Maybe<Scalars['String']>;
  connector_state_reset?: Maybe<Scalars['Boolean']>;
  connector_type?: Maybe<Scalars['String']>;
  connector_user?: Maybe<User>;
  created_at?: Maybe<Scalars['DateTime']>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  only_contextual?: Maybe<Scalars['Boolean']>;
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
  works?: Maybe<Array<Maybe<Work>>>;
};


export type ConnectorWorksArgs = {
  status?: InputMaybe<Scalars['String']>;
};

export type ConnectorConfig = {
  __typename?: 'ConnectorConfig';
  connection: RabbitMqConnection;
  listen: Scalars['String'];
  listen_exchange: Scalars['String'];
  push: Scalars['String'];
  push_exchange: Scalars['String'];
};

export enum ConnectorType {
  ExternalImport = 'EXTERNAL_IMPORT',
  InternalEnrichment = 'INTERNAL_ENRICHMENT',
  InternalExportFile = 'INTERNAL_EXPORT_FILE',
  InternalImportFile = 'INTERNAL_IMPORT_FILE',
  Stream = 'STREAM'
}

export type Container = {
  confidence?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  entity_type: Scalars['String'];
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objects?: Maybe<StixObjectOrStixRelationshipConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContainerExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ContainerNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ContainerObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  all?: InputMaybe<Scalars['Boolean']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixObjectOrStixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixObjectOrStixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContainerOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ContainerReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ContainerStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContainerConnection = {
  __typename?: 'ContainerConnection';
  edges?: Maybe<Array<Maybe<ContainerEdge>>>;
  pageInfo: PageInfo;
};

export type ContainerEdge = {
  __typename?: 'ContainerEdge';
  cursor: Scalars['String'];
  node: Container;
};

export type ContainerEditMutations = {
  __typename?: 'ContainerEditMutations';
  contextClean?: Maybe<Container>;
  contextPatch?: Maybe<Container>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Container>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Container>;
};


export type ContainerEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type ContainerEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContainerEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type ContainerEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum ContainersFilter {
  AttributeAbstract = 'attribute_abstract',
  Authors = 'authors',
  Content = 'content',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  ObjectContains = 'objectContains',
  ReportTypes = 'report_types',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type ContainersFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: ContainersFilter;
  operator?: InputMaybe<Scalars['String']>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum ContainersOrdering {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  Published = 'published',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type ContextData = {
  __typename?: 'ContextData';
  commit?: Maybe<Scalars['String']>;
  entity_type: Scalars['String'];
  from_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message: Scalars['String'];
  references?: Maybe<Array<Maybe<ExternalReference>>>;
  to_id?: Maybe<Scalars['String']>;
};

export enum CountriesFilter {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  StatusId = 'status_id'
}

export type CountriesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: CountriesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CountriesOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Description = 'description',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Country = BasicObject & Location & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Country';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  precision?: Maybe<Scalars['Float']>;
  region?: Maybe<Region>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CountryConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type CountryExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CountryStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CountryAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  precision?: InputMaybe<Scalars['Float']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  edges?: Maybe<Array<Maybe<CountryEdge>>>;
  pageInfo: PageInfo;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  cursor: Scalars['String'];
  node: Country;
};

export type CountryEditMutations = {
  __typename?: 'CountryEditMutations';
  contextClean?: Maybe<Country>;
  contextPatch?: Maybe<Country>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Country>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Country>;
};


export type CountryEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type CountryEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CountryEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type CountryEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export type CourseOfAction = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'CourseOfAction';
  attackPatterns?: Maybe<AttackPatternConnection>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_mitre_id?: Maybe<Scalars['String']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_log_sources?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_threat_hunting?: Maybe<Scalars['String']>;
};


export type CourseOfActionConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type CourseOfActionExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type CourseOfActionStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseOfActionAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_mitre_id?: InputMaybe<Scalars['String']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CourseOfActionConnection = {
  __typename?: 'CourseOfActionConnection';
  edges?: Maybe<Array<Maybe<CourseOfActionEdge>>>;
  pageInfo: PageInfo;
};

export type CourseOfActionEdge = {
  __typename?: 'CourseOfActionEdge';
  cursor: Scalars['String'];
  node: CourseOfAction;
};

export type CourseOfActionEditMutations = {
  __typename?: 'CourseOfActionEditMutations';
  contextClean?: Maybe<CourseOfAction>;
  contextPatch?: Maybe<CourseOfAction>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<CourseOfAction>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<CourseOfAction>;
};


export type CourseOfActionEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type CourseOfActionEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CourseOfActionEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type CourseOfActionEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum CoursesOfActionFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  MitigatedBy = 'mitigatedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  XMitreId = 'x_mitre_id'
}

export type CoursesOfActionFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: CoursesOfActionFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum CoursesOfActionOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XMitreId = 'x_mitre_id'
}

/** Dependency information containing the name and the deployed version. */
export type DependencyVersion = {
  __typename?: 'DependencyVersion';
  name: Scalars['String'];
  version: Scalars['String'];
};

export type Directory = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'Directory';
  atime?: Maybe<Scalars['DateTime']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  ctime?: Maybe<Scalars['DateTime']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  mtime?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  path: Scalars['String'];
  path_enc?: Maybe<Scalars['String']>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DirectoryConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type DirectoryExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DirectoryStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DirectoryStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DirectoryAddInput = {
  atime?: InputMaybe<Scalars['DateTime']>;
  ctime?: InputMaybe<Scalars['DateTime']>;
  mtime?: InputMaybe<Scalars['DateTime']>;
  path: Scalars['String'];
  path_enc?: InputMaybe<Scalars['String']>;
};

export type Distribution = {
  __typename?: 'Distribution';
  entity?: Maybe<StixObjectOrStixRelationship>;
  label: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

export type DocsMetrics = {
  __typename?: 'DocsMetrics';
  count?: Maybe<Scalars['String']>;
};

export type DomainName = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'DomainName';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DomainNameConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type DomainNameExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNamePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type DomainNameStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type DomainNameStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DomainNameAddInput = {
  value: Scalars['String'];
};

export type EditContext = {
  focusOn?: InputMaybe<Scalars['String']>;
};

export type EditInput = {
  key: Scalars['String'];
  operation?: InputMaybe<EditOperation>;
  value: Array<InputMaybe<Scalars['String']>>;
};

export enum EditOperation {
  Add = 'add',
  Remove = 'remove',
  Replace = 'replace'
}

export type EditUserContext = {
  __typename?: 'EditUserContext';
  focusOn?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ElasticSearchMetrics = {
  __typename?: 'ElasticSearchMetrics';
  docs?: Maybe<DocsMetrics>;
  get?: Maybe<GetMetrics>;
  indexing?: Maybe<IndexingMetrics>;
  search?: Maybe<SearchMetrics>;
};

export type EmailAddr = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'EmailAddr';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  display_name?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EmailAddrConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type EmailAddrExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailAddrStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EmailAddrStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmailAddrAddInput = {
  display_name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type EmailMessage = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'EmailMessage';
  attribute_date?: Maybe<Scalars['DateTime']>;
  body?: Maybe<Scalars['String']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  content_type?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  is_multipart?: Maybe<Scalars['Boolean']>;
  jobs?: Maybe<Array<Maybe<Work>>>;
  message_id?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  received_lines?: Maybe<Array<Maybe<Scalars['String']>>>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  subject?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EmailMessageConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type EmailMessageExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessagePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMessageStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EmailMessageStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmailMessageAddInput = {
  attribute_date?: InputMaybe<Scalars['DateTime']>;
  body?: InputMaybe<Scalars['String']>;
  content_type?: InputMaybe<Scalars['String']>;
  is_multipart?: InputMaybe<Scalars['Boolean']>;
  message_id?: InputMaybe<Scalars['String']>;
  received_lines?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subject?: InputMaybe<Scalars['String']>;
};

export type EmailMimePartType = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'EmailMimePartType';
  body?: Maybe<Scalars['String']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  content_disposition?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EmailMimePartTypeConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type EmailMimePartTypeExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type EmailMimePartTypeStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type EmailMimePartTypeStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EmailMimePartTypeAddInput = {
  body?: InputMaybe<Scalars['String']>;
  content_disposition?: InputMaybe<Scalars['String']>;
  content_type?: InputMaybe<Scalars['String']>;
};

export type ExternalReference = BasicObject & StixMetaObject & StixObject & {
  __typename?: 'ExternalReference';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  external_id?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  modified?: Maybe<Scalars['DateTime']>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  references?: Maybe<StixObjectOrStixRelationshipConnection>;
  source_name: Scalars['String'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ExternalReferenceConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ExternalReferenceExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ExternalReferenceImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ExternalReferenceJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ExternalReferencePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ExternalReferenceReferencesArgs = {
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExternalReferenceAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  external_id?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  hash?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  source_name: Scalars['String'];
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExternalReferenceConnection = {
  __typename?: 'ExternalReferenceConnection';
  edges?: Maybe<Array<Maybe<ExternalReferenceEdge>>>;
  pageInfo: PageInfo;
};

export type ExternalReferenceEdge = {
  __typename?: 'ExternalReferenceEdge';
  cursor: Scalars['String'];
  node: ExternalReference;
};

export type ExternalReferenceEditMutations = {
  __typename?: 'ExternalReferenceEditMutations';
  askEnrichment?: Maybe<Work>;
  contextClean?: Maybe<ExternalReference>;
  contextPatch?: Maybe<ExternalReference>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<ExternalReference>;
  importPush?: Maybe<File>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<ExternalReference>;
};


export type ExternalReferenceEditMutationsAskEnrichmentArgs = {
  connectorId: Scalars['ID'];
};


export type ExternalReferenceEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type ExternalReferenceEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type ExternalReferenceEditMutationsImportPushArgs = {
  file: Scalars['Upload'];
};


export type ExternalReferenceEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type ExternalReferenceEditMutationsRelationDeleteArgs = {
  fromId: Scalars['String'];
  relationship_type: Scalars['String'];
};

export enum ExternalReferencesFilter {
  ExternalId = 'external_id',
  SourceName = 'source_name',
  Url = 'url',
  UsedBy = 'usedBy'
}

export type ExternalReferencesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: ExternalReferencesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ExternalReferencesOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  ExternalId = 'external_id',
  Hash = 'hash',
  Modified = 'modified',
  SourceName = 'source_name',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  lastModified?: Maybe<Scalars['DateTime']>;
  lastModifiedSinceMin?: Maybe<Scalars['Int']>;
  metaData?: Maybe<FileMetadata>;
  name: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  uploadStatus: State;
  works?: Maybe<Array<Maybe<Work>>>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  edges?: Maybe<Array<Maybe<FileEdge>>>;
  pageInfo: PageInfo;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  cursor: Scalars['String'];
  node: File;
};

export type FileMetadata = {
  __typename?: 'FileMetadata';
  encoding?: Maybe<Scalars['String']>;
  entity?: Maybe<StixCoreObject>;
  entity_id?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<WorkMessage>>>;
  list_filters?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<WorkMessage>>>;
  mimetype?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export enum FilterMode {
  And = 'and',
  Or = 'or'
}

export type GetMetrics = {
  __typename?: 'GetMetrics';
  total?: Maybe<Scalars['String']>;
};

export type Group = BasicObject & InternalObject & {
  __typename?: 'Group';
  allowed_marking?: Maybe<Array<Maybe<MarkingDefinition>>>;
  auto_new_marking?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  default_assignation?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  members?: Maybe<UserConnection>;
  name: Scalars['String'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type GroupAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges?: Maybe<Array<Maybe<GroupEdge>>>;
  pageInfo: PageInfo;
};

export type GroupEdge = {
  __typename?: 'GroupEdge';
  cursor: Scalars['String'];
  node: Group;
};

export type GroupEditMutations = {
  __typename?: 'GroupEditMutations';
  contextClean?: Maybe<Group>;
  contextPatch?: Maybe<Group>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Group>;
  relationAdd?: Maybe<InternalRelationship>;
  relationDelete?: Maybe<Group>;
};


export type GroupEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type GroupEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type GroupEditMutationsRelationAddArgs = {
  input?: InputMaybe<InternalRelationshipAddInput>;
};


export type GroupEditMutationsRelationDeleteArgs = {
  fromId?: InputMaybe<Scalars['String']>;
  relationship_type: Scalars['String'];
  toId?: InputMaybe<Scalars['String']>;
};

export enum GroupsOrdering {
  AutoNewMarking = 'auto_new_marking',
  CreatedAt = 'created_at',
  DefaultAssignation = 'default_assignation',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Hash = {
  __typename?: 'Hash';
  algorithm: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
};

export type HashInput = {
  algorithm: Scalars['String'];
  hash: Scalars['String'];
};

export type HashedObservable = {
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  hashes?: Maybe<Array<Maybe<Hash>>>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type HashedObservableConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type HashedObservableExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservablePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type HashedObservableStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HashedObservableStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IPv4Addr = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'IPv4Addr';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IPv4AddrConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IPv4AddrExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv4AddrStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IPv4AddrStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IPv4AddrAddInput = {
  belongsTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  resolvesTo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value?: InputMaybe<Scalars['String']>;
};

export type IPv6Addr = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'IPv6Addr';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IPv6AddrConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IPv6AddrExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IPv6AddrStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IPv6AddrStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IPv6AddrAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export enum IdentitiesFilter {
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  IdentityClass = 'identity_class',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XOpenctiAliases = 'x_opencti_aliases'
}

export type IdentitiesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: IdentitiesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum IdentitiesOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Identity = {
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  contact_information?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  identity_class: Scalars['String'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IdentityConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IdentityExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IdentityStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IdentityAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  contact_information?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  type: IdentityType;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IdentityConnection = {
  __typename?: 'IdentityConnection';
  edges?: Maybe<Array<Maybe<IdentityEdge>>>;
  pageInfo: PageInfo;
};

export type IdentityEdge = {
  __typename?: 'IdentityEdge';
  cursor: Scalars['String'];
  node: Identity;
};

export type IdentityEditMutations = {
  __typename?: 'IdentityEditMutations';
  contextClean?: Maybe<Identity>;
  contextPatch?: Maybe<Identity>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Identity>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Identity>;
};


export type IdentityEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type IdentityEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IdentityEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type IdentityEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum IdentityType {
  Individual = 'Individual',
  Organization = 'Organization',
  Sector = 'Sector',
  System = 'System'
}

export type Incident = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Incident';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['DateTime']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objective?: Maybe<Scalars['String']>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IncidentConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IncidentExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IncidentStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IncidentAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  lang?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objective?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IncidentConnection = {
  __typename?: 'IncidentConnection';
  edges?: Maybe<Array<Maybe<IncidentEdge>>>;
  pageInfo: PageInfo;
};

export type IncidentEdge = {
  __typename?: 'IncidentEdge';
  cursor: Scalars['String'];
  node: Incident;
};

export type IncidentEditMutations = {
  __typename?: 'IncidentEditMutations';
  contextClean?: Maybe<Incident>;
  contextPatch?: Maybe<Incident>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Incident>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Incident>;
};


export type IncidentEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type IncidentEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IncidentEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type IncidentEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum IncidentsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id'
}

export type IncidentsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: IncidentsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum IncidentsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  LastSeen = 'last_seen',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type IndexingMetrics = {
  __typename?: 'IndexingMetrics';
  delete_total?: Maybe<Scalars['String']>;
  index_total?: Maybe<Scalars['String']>;
};

export type Indicator = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Indicator';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicator_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observables?: Maybe<StixCyberObservableConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pattern?: Maybe<Scalars['String']>;
  pattern_type?: Maybe<Scalars['String']>;
  pattern_version?: Maybe<Scalars['String']>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  valid_from?: Maybe<Scalars['DateTime']>;
  valid_until?: Maybe<Scalars['DateTime']>;
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_mitre_platforms?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_detection?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_main_observable_type?: Maybe<Scalars['String']>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IndicatorConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IndicatorExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndicatorStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndicatorAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  indicator_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pattern: Scalars['String'];
  pattern_type: Scalars['String'];
  pattern_version?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  valid_from?: InputMaybe<Scalars['DateTime']>;
  valid_until?: InputMaybe<Scalars['DateTime']>;
  x_mitre_platforms?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_detection?: InputMaybe<Scalars['Boolean']>;
  x_opencti_main_observable_type?: InputMaybe<Scalars['String']>;
  x_opencti_score?: InputMaybe<Scalars['Int']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndicatorConnection = {
  __typename?: 'IndicatorConnection';
  edges?: Maybe<Array<Maybe<IndicatorEdge>>>;
  pageInfo: PageInfo;
};

export type IndicatorEdge = {
  __typename?: 'IndicatorEdge';
  cursor: Scalars['String'];
  node: Indicator;
};

export type IndicatorEditMutations = {
  __typename?: 'IndicatorEditMutations';
  contextClean?: Maybe<Indicator>;
  contextPatch?: Maybe<Indicator>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Indicator>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Indicator>;
};


export type IndicatorEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type IndicatorEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IndicatorEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type IndicatorEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum IndicatorsFilter {
  BasedOn = 'basedOn',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  Indicates = 'indicates',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Pattern = 'pattern',
  PatternType = 'pattern_type',
  PatternVersion = 'pattern_version',
  Revoked = 'revoked',
  SightedBy = 'sightedBy',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  ValidFrom = 'valid_from',
  ValidUntil = 'valid_until',
  XOpenctiDetection = 'x_opencti_detection',
  XOpenctiMainObservableType = 'x_opencti_main_observable_type',
  XOpenctiScore = 'x_opencti_score'
}

export type IndicatorsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: IndicatorsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum IndicatorsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  CreatedAt = 'created_at',
  IndicatorTypes = 'indicator_types',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  Pattern = 'pattern',
  PatternType = 'pattern_type',
  PatternVersion = 'pattern_version',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  ValidFrom = 'valid_from',
  ValidUntil = 'valid_until',
  XOpenctiDetection = 'x_opencti_detection',
  XOpenctiScore = 'x_opencti_score'
}

export type Individual = BasicObject & Identity & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Individual';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  contact_information?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  identity_class: Scalars['String'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  organizations?: Maybe<OrganizationConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_firstname?: Maybe<Scalars['String']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_lastname?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IndividualConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IndividualExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IndividualStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndividualAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  contact_information?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_firstname?: InputMaybe<Scalars['String']>;
  x_opencti_lastname?: InputMaybe<Scalars['String']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IndividualConnection = {
  __typename?: 'IndividualConnection';
  edges?: Maybe<Array<Maybe<IndividualEdge>>>;
  pageInfo: PageInfo;
};

export type IndividualEdge = {
  __typename?: 'IndividualEdge';
  cursor: Scalars['String'];
  node: Individual;
};

export type IndividualEditMutations = {
  __typename?: 'IndividualEditMutations';
  contextClean?: Maybe<Individual>;
  contextPatch?: Maybe<Individual>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Individual>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Individual>;
};


export type IndividualEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type IndividualEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IndividualEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type IndividualEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum IndividualsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type IndividualsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: IndividualsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum IndividualsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id'
}

export type Inference = {
  __typename?: 'Inference';
  attributes?: Maybe<Array<Maybe<InferenceAttribute>>>;
  explanation: Array<Maybe<StixObjectOrStixRelationship>>;
  rule: Rule;
};

export type InferenceAttribute = {
  __typename?: 'InferenceAttribute';
  field: Scalars['String'];
  value: Scalars['String'];
};

export type Infrastructure = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Infrastructure';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  infrastructure_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  lang?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['DateTime']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type InfrastructureConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type InfrastructureExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructurePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type InfrastructureStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InfrastructureAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  infrastructure_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InfrastructureConnection = {
  __typename?: 'InfrastructureConnection';
  edges?: Maybe<Array<Maybe<InfrastructureEdge>>>;
  pageInfo: PageInfo;
};

export type InfrastructureEdge = {
  __typename?: 'InfrastructureEdge';
  cursor: Scalars['String'];
  node: Infrastructure;
};

export type InfrastructureEditMutations = {
  __typename?: 'InfrastructureEditMutations';
  contextClean?: Maybe<Infrastructure>;
  contextPatch?: Maybe<Infrastructure>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Infrastructure>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Infrastructure>;
};


export type InfrastructureEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type InfrastructureEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type InfrastructureEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type InfrastructureEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum InfrastructuresFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  InfrastructureTypes = 'infrastructure_types',
  LabelledBy = 'labelledBy',
  LastSeen = 'last_seen',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type InfrastructuresFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: InfrastructuresFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum InfrastructuresOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  InfrastructureTypes = 'infrastructure_types',
  LastSeen = 'last_seen',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type InternalObject = {
  entity_type: Scalars['String'];
  id: Scalars['ID'];
};

export type InternalRelationship = BasicRelationship & {
  __typename?: 'InternalRelationship';
  created_at: Scalars['DateTime'];
  entity_type: Scalars['String'];
  from?: Maybe<InternalObject>;
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  to?: Maybe<InternalObject>;
  toRole?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InternalRelationshipAddInput = {
  fromId?: InputMaybe<Scalars['ID']>;
  relationship_type: Scalars['String'];
  toId?: InputMaybe<Scalars['ID']>;
};

export type IntrusionSet = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'IntrusionSet';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  goals?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['DateTime']>;
  locations?: Maybe<LocationConnection>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  primary_motivation?: Maybe<Scalars['String']>;
  reports?: Maybe<ReportConnection>;
  resource_level?: Maybe<Scalars['String']>;
  revoked: Scalars['Boolean'];
  secondary_motivations?: Maybe<Array<Maybe<Scalars['String']>>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IntrusionSetConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type IntrusionSetExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type IntrusionSetStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntrusionSetAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primary_motivation?: InputMaybe<Scalars['String']>;
  resource_level?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  secondary_motivations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntrusionSetConnection = {
  __typename?: 'IntrusionSetConnection';
  edges?: Maybe<Array<Maybe<IntrusionSetEdge>>>;
  pageInfo: PageInfo;
};

export type IntrusionSetEdge = {
  __typename?: 'IntrusionSetEdge';
  cursor: Scalars['String'];
  node: IntrusionSet;
};

export type IntrusionSetEditMutations = {
  __typename?: 'IntrusionSetEditMutations';
  contextClean?: Maybe<IntrusionSet>;
  contextPatch?: Maybe<IntrusionSet>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<IntrusionSet>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<IntrusionSet>;
};


export type IntrusionSetEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type IntrusionSetEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IntrusionSetEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type IntrusionSetEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum IntrusionSetsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type IntrusionSetsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: IntrusionSetsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum IntrusionSetsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type KillChainPhase = BasicObject & StixMetaObject & StixObject & {
  __typename?: 'KillChainPhase';
  created?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  kill_chain_name: Scalars['String'];
  modified?: Maybe<Scalars['DateTime']>;
  parent_types: Array<Maybe<Scalars['String']>>;
  phase_name: Scalars['String'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_order?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type KillChainPhaseAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  kill_chain_name: Scalars['String'];
  modified?: InputMaybe<Scalars['DateTime']>;
  phase_name: Scalars['String'];
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_order: Scalars['Int'];
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type KillChainPhaseConnection = {
  __typename?: 'KillChainPhaseConnection';
  edges?: Maybe<Array<Maybe<KillChainPhaseEdge>>>;
  pageInfo: PageInfo;
};

export type KillChainPhaseEdge = {
  __typename?: 'KillChainPhaseEdge';
  cursor: Scalars['String'];
  node: KillChainPhase;
};

export type KillChainPhaseEditMutations = {
  __typename?: 'KillChainPhaseEditMutations';
  contextClean?: Maybe<KillChainPhase>;
  contextPatch?: Maybe<KillChainPhase>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<KillChainPhase>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<KillChainPhase>;
};


export type KillChainPhaseEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type KillChainPhaseEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type KillChainPhaseEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type KillChainPhaseEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum KillChainPhasesFilter {
  KillChainName = 'kill_chain_name',
  PhaseName = 'phase_name'
}

export type KillChainPhasesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: KillChainPhasesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum KillChainPhasesOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  KillChainName = 'kill_chain_name',
  Modified = 'modified',
  PhaseName = 'phase_name',
  UpdatedAt = 'updated_at',
  XOpenctiOrder = 'x_opencti_order'
}

export type Label = BasicObject & StixMetaObject & StixObject & {
  __typename?: 'Label';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  modified?: Maybe<Scalars['DateTime']>;
  parent_types: Array<Maybe<Scalars['String']>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LabelAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  stix_id?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LabelConnection = {
  __typename?: 'LabelConnection';
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  pageInfo: PageInfo;
};

export type LabelEdge = {
  __typename?: 'LabelEdge';
  cursor: Scalars['String'];
  node: Label;
};

export type LabelEditMutations = {
  __typename?: 'LabelEditMutations';
  contextClean?: Maybe<Label>;
  contextPatch?: Maybe<Label>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Label>;
};


export type LabelEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type LabelEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum LabelsFilter {
  MarkedBy = 'markedBy',
  Value = 'value'
}

export type LabelsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: LabelsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum LabelsOrdering {
  Color = 'color',
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  UpdatedAt = 'updated_at',
  Value = 'value'
}

export type ListTask = Task & {
  __typename?: 'ListTask';
  actions?: Maybe<Array<Maybe<TaskAction>>>;
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<TaskError>>>;
  id: Scalars['ID'];
  initiator?: Maybe<User>;
  last_execution_date?: Maybe<Scalars['DateTime']>;
  task_expected_number?: Maybe<Scalars['Int']>;
  task_ids?: Maybe<Array<Scalars['ID']>>;
  task_processed_number?: Maybe<Scalars['Int']>;
  type?: Maybe<TaskType>;
};

export type ListTaskAddInput = {
  actions: Array<InputMaybe<TaskActionInput>>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type Location = {
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  precision?: Maybe<Scalars['Float']>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LocationConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type LocationExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type LocationStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  precision?: InputMaybe<Scalars['Float']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  type: LocationType;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  edges?: Maybe<Array<Maybe<LocationEdge>>>;
  pageInfo: PageInfo;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String'];
  node: Location;
};

export type LocationEditMutations = {
  __typename?: 'LocationEditMutations';
  contextClean?: Maybe<Location>;
  contextPatch?: Maybe<Location>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Location>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Location>;
};


export type LocationEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type LocationEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LocationEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type LocationEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum LocationType {
  City = 'City',
  Country = 'Country',
  Position = 'Position',
  Region = 'Region'
}

export enum LocationsFilter {
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XOpenctiAliases = 'x_opencti_aliases'
}

export type LocationsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: LocationsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum LocationsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Log = {
  __typename?: 'Log';
  context_data?: Maybe<ContextData>;
  event_type: Scalars['String'];
  id: Scalars['ID'];
  timestamp: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id: Scalars['String'];
};

export type LogConnection = {
  __typename?: 'LogConnection';
  edges?: Maybe<Array<Maybe<LogEdge>>>;
  pageInfo: PageInfo;
};

export type LogEdge = {
  __typename?: 'LogEdge';
  cursor: Scalars['String'];
  node: Log;
};

export enum LogsFilter {
  ApplicantId = 'applicant_id',
  ConnectionId = 'connection_id',
  EntityId = 'entity_id',
  EventType = 'event_type',
  UserId = 'user_id'
}

export type LogsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: LogsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum LogsOrdering {
  Event = 'event',
  Timestamp = 'timestamp'
}

export type LogsWorkerConfig = {
  __typename?: 'LogsWorkerConfig';
  elasticsearch_api_key?: Maybe<Scalars['String']>;
  elasticsearch_index: Scalars['String'];
  elasticsearch_password?: Maybe<Scalars['String']>;
  elasticsearch_proxy?: Maybe<Scalars['String']>;
  elasticsearch_ssl_reject_unauthorized?: Maybe<Scalars['Boolean']>;
  elasticsearch_url: Array<Maybe<Scalars['String']>>;
  elasticsearch_username?: Maybe<Scalars['String']>;
};

export type MacAddr = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'MacAddr';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MacAddrConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type MacAddrExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MacAddrStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MacAddrStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MacAddrAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type Malware = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Malware';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  architecture_execution_envs?: Maybe<Array<Maybe<Scalars['String']>>>;
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  implementation_languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  importFiles?: Maybe<FileConnection>;
  is_family?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  lang?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['DateTime']>;
  malware_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MalwareConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type MalwareExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwarePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MalwareStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MalwareAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  architecture_execution_envs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  capabilities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  implementation_languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  is_family?: InputMaybe<Scalars['Boolean']>;
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['DateTime']>;
  malware_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MalwareConnection = {
  __typename?: 'MalwareConnection';
  edges?: Maybe<Array<Maybe<MalwareEdge>>>;
  pageInfo: PageInfo;
};

export type MalwareEdge = {
  __typename?: 'MalwareEdge';
  cursor: Scalars['String'];
  node: Malware;
};

export type MalwareEditMutations = {
  __typename?: 'MalwareEditMutations';
  contextClean?: Maybe<Malware>;
  contextPatch?: Maybe<Malware>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Malware>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Malware>;
};


export type MalwareEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type MalwareEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MalwareEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type MalwareEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum MalwaresFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  IsFamily = 'is_family',
  LabelledBy = 'labelledBy',
  LastSeen = 'last_seen',
  MalwareTypes = 'malware_types',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type MalwaresFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: MalwaresFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum MalwaresOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  LastSeen = 'last_seen',
  MalwareTypes = 'malware_types',
  Modified = 'modified',
  Name = 'name',
  ObjectLabel = 'objectLabel',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type MarkingDefinition = BasicObject & StixMetaObject & StixObject & {
  __typename?: 'MarkingDefinition';
  created?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  definition?: Maybe<Scalars['String']>;
  definition_type?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  modified?: Maybe<Scalars['DateTime']>;
  parent_types: Array<Maybe<Scalars['String']>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_color?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_order: Scalars['Int'];
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MarkingDefinitionAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  definition: Scalars['String'];
  definition_type: Scalars['String'];
  modified?: InputMaybe<Scalars['DateTime']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_color?: InputMaybe<Scalars['String']>;
  x_opencti_order: Scalars['Int'];
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MarkingDefinitionConnection = {
  __typename?: 'MarkingDefinitionConnection';
  edges?: Maybe<Array<Maybe<MarkingDefinitionEdge>>>;
  pageInfo: PageInfo;
};

export type MarkingDefinitionEdge = {
  __typename?: 'MarkingDefinitionEdge';
  cursor: Scalars['String'];
  node: MarkingDefinition;
};

export type MarkingDefinitionEditMutations = {
  __typename?: 'MarkingDefinitionEditMutations';
  contextClean?: Maybe<MarkingDefinition>;
  contextPatch?: Maybe<MarkingDefinition>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<MarkingDefinition>;
};


export type MarkingDefinitionEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type MarkingDefinitionEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum MarkingDefinitionsFilter {
  Definition = 'definition',
  DefinitionType = 'definition_type',
  MarkedBy = 'markedBy'
}

export type MarkingDefinitionsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: MarkingDefinitionsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum MarkingDefinitionsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Definition = 'definition',
  DefinitionType = 'definition_type',
  Modified = 'modified',
  UpdatedAt = 'updated_at',
  XOpenctiColor = 'x_opencti_color',
  XOpenctiOrder = 'x_opencti_order'
}

export type MessagesStats = {
  __typename?: 'MessagesStats';
  ack?: Maybe<Scalars['String']>;
  ack_details?: Maybe<AckDetails>;
};

export type Module = {
  __typename?: 'Module';
  enable: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  artifactImport?: Maybe<Artifact>;
  askJobImport?: Maybe<File>;
  attackPatternAdd?: Maybe<AttackPattern>;
  attackPatternEdit?: Maybe<AttackPatternEditMutations>;
  bookmarkAdd?: Maybe<StixDomainObject>;
  bookmarkDelete?: Maybe<Scalars['ID']>;
  campaignAdd?: Maybe<Campaign>;
  campaignEdit?: Maybe<CampaignEditMutations>;
  cityAdd?: Maybe<City>;
  cityEdit?: Maybe<CityEditMutations>;
  containerEdit?: Maybe<ContainerEditMutations>;
  countryAdd?: Maybe<Country>;
  countryEdit?: Maybe<CountryEditMutations>;
  courseOfActionAdd?: Maybe<CourseOfAction>;
  courseOfActionEdit?: Maybe<CourseOfActionEditMutations>;
  deleteConnector: Scalars['ID'];
  deleteImport?: Maybe<Scalars['Boolean']>;
  deleteTask: Scalars['ID'];
  externalReferenceAdd?: Maybe<ExternalReference>;
  externalReferenceEdit?: Maybe<ExternalReferenceEditMutations>;
  groupAdd?: Maybe<Group>;
  groupEdit?: Maybe<GroupEditMutations>;
  identityAdd?: Maybe<Identity>;
  identityEdit?: Maybe<IdentityEditMutations>;
  incidentAdd?: Maybe<Incident>;
  incidentEdit?: Maybe<IncidentEditMutations>;
  indicatorAdd?: Maybe<Indicator>;
  indicatorEdit?: Maybe<IndicatorEditMutations>;
  individualAdd?: Maybe<Individual>;
  individualEdit?: Maybe<IndividualEditMutations>;
  infrastructureAdd?: Maybe<Infrastructure>;
  infrastructureEdit?: Maybe<InfrastructureEditMutations>;
  intrusionSetAdd?: Maybe<IntrusionSet>;
  intrusionSetEdit?: Maybe<IntrusionSetEditMutations>;
  killChainPhaseAdd?: Maybe<KillChainPhase>;
  killChainPhaseEdit?: Maybe<KillChainPhaseEditMutations>;
  labelAdd?: Maybe<Label>;
  labelEdit?: Maybe<LabelEditMutations>;
  listTaskAdd: Task;
  locationAdd?: Maybe<Location>;
  locationEdit?: Maybe<LocationEditMutations>;
  logout?: Maybe<Scalars['ID']>;
  malwareAdd?: Maybe<Malware>;
  malwareEdit?: Maybe<MalwareEditMutations>;
  markingDefinitionAdd?: Maybe<MarkingDefinition>;
  markingDefinitionEdit?: Maybe<MarkingDefinitionEditMutations>;
  meEdit?: Maybe<User>;
  meTokenRenew?: Maybe<User>;
  noteAdd?: Maybe<Note>;
  noteEdit?: Maybe<NoteEditMutations>;
  observedDataAdd?: Maybe<ObservedData>;
  observedDataEdit?: Maybe<ObservedDataEditMutations>;
  opinionAdd?: Maybe<Opinion>;
  opinionEdit?: Maybe<OpinionEditMutations>;
  organizationAdd?: Maybe<Organization>;
  organizationEdit?: Maybe<OrganizationEditMutations>;
  pingConnector?: Maybe<Connector>;
  positionAdd?: Maybe<Position>;
  positionEdit?: Maybe<PositionEditMutations>;
  queryTaskAdd: Task;
  regionAdd?: Maybe<Region>;
  regionEdit?: Maybe<RegionEditMutations>;
  registerConnector?: Maybe<Connector>;
  reportAdd?: Maybe<Report>;
  reportEdit?: Maybe<ReportEditMutations>;
  resetStateConnector?: Maybe<Connector>;
  retentionRuleAdd: RetentionRule;
  retentionRuleCheck: Scalars['Int'];
  retentionRuleEdit?: Maybe<RetentionRuleEditMutations>;
  roleAdd?: Maybe<Role>;
  roleEdit?: Maybe<RoleEditMutations>;
  ruleManagerClean: RuleManager;
  ruleSetActivation: Rule;
  runtimeAttributeEdit: Scalars['ID'];
  sectorAdd?: Maybe<Sector>;
  sectorEdit?: Maybe<SectorEditMutations>;
  sessionKill?: Maybe<Scalars['ID']>;
  settingsEdit?: Maybe<SettingsEditMutations>;
  stixCoreObjectEdit?: Maybe<StixCoreObjectEditMutations>;
  stixCoreRelationshipAdd?: Maybe<StixCoreRelationship>;
  stixCoreRelationshipDelete: Scalars['Boolean'];
  stixCoreRelationshipEdit?: Maybe<StixCoreRelationshipEditMutations>;
  stixCyberObservableAdd?: Maybe<StixCyberObservable>;
  stixCyberObservableEdit?: Maybe<StixCyberObservableEditMutations>;
  stixCyberObservableRelationshipAdd?: Maybe<StixCyberObservableRelationship>;
  stixCyberObservableRelationshipEdit?: Maybe<StixCyberObservableRelationshipEditMutations>;
  stixCyberObservablesExportAsk?: Maybe<FileConnection>;
  stixCyberObservablesExportPush?: Maybe<Scalars['Boolean']>;
  stixDomainObjectAdd?: Maybe<StixDomainObject>;
  stixDomainObjectEdit?: Maybe<StixDomainObjectEditMutations>;
  stixDomainObjectsDelete: Array<Maybe<Scalars['ID']>>;
  stixDomainObjectsExportAsk?: Maybe<FileConnection>;
  stixDomainObjectsExportPush?: Maybe<Scalars['Boolean']>;
  stixEdit?: Maybe<StixEditMutations>;
  stixSightingRelationshipAdd?: Maybe<StixSightingRelationship>;
  stixSightingRelationshipEdit?: Maybe<StixSightingRelationshipEditMutations>;
  streamCollectionAdd?: Maybe<StreamCollection>;
  streamCollectionEdit?: Maybe<StreamCollectionEditMutations>;
  subTypeEdit?: Maybe<SubTypeEditMutations>;
  synchronizerAdd?: Maybe<Synchronizer>;
  synchronizerEdit?: Maybe<SynchronizerEditMutations>;
  synchronizerStart?: Maybe<Synchronizer>;
  synchronizerStop?: Maybe<Synchronizer>;
  synchronizerTest?: Maybe<Scalars['String']>;
  systemAdd?: Maybe<System>;
  systemEdit?: Maybe<SystemEditMutations>;
  taxiiCollectionAdd?: Maybe<TaxiiCollection>;
  taxiiCollectionEdit?: Maybe<TaxiiCollectionEditMutations>;
  threatActorAdd?: Maybe<ThreatActor>;
  threatActorEdit?: Maybe<ThreatActorEditMutations>;
  token?: Maybe<Scalars['String']>;
  toolAdd?: Maybe<Tool>;
  toolEdit?: Maybe<ToolEditMutations>;
  uploadImport?: Maybe<File>;
  uploadPending?: Maybe<File>;
  userAdd?: Maybe<User>;
  userEdit?: Maybe<UserEditMutations>;
  userSessionsKill?: Maybe<Array<Maybe<Scalars['ID']>>>;
  userSubscriptionAdd?: Maybe<UserSubscription>;
  userSubscriptionEdit?: Maybe<UserSubscriptionEditMutations>;
  vulnerabilityAdd?: Maybe<Vulnerability>;
  vulnerabilityEdit?: Maybe<VulnerabilityEditMutations>;
  workAdd: Work;
  workDelete?: Maybe<Scalars['Boolean']>;
  workEdit?: Maybe<WorkEditMutations>;
  workspaceAdd?: Maybe<Workspace>;
  workspaceEdit?: Maybe<WorkspaceEditMutations>;
};


export type MutationArtifactImportArgs = {
  createdBy?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_description?: InputMaybe<Scalars['String']>;
};


export type MutationAskJobImportArgs = {
  bypassEntityId?: InputMaybe<Scalars['String']>;
  bypassValidation?: InputMaybe<Scalars['Boolean']>;
  connectorId?: InputMaybe<Scalars['String']>;
  fileName: Scalars['ID'];
};


export type MutationAttackPatternAddArgs = {
  input?: InputMaybe<AttackPatternAddInput>;
};


export type MutationAttackPatternEditArgs = {
  id: Scalars['ID'];
};


export type MutationBookmarkAddArgs = {
  id: Scalars['ID'];
  type: Scalars['String'];
};


export type MutationBookmarkDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCampaignAddArgs = {
  input?: InputMaybe<CampaignAddInput>;
};


export type MutationCampaignEditArgs = {
  id: Scalars['ID'];
};


export type MutationCityAddArgs = {
  input?: InputMaybe<CityAddInput>;
};


export type MutationCityEditArgs = {
  id: Scalars['ID'];
};


export type MutationContainerEditArgs = {
  id: Scalars['ID'];
};


export type MutationCountryAddArgs = {
  input?: InputMaybe<CountryAddInput>;
};


export type MutationCountryEditArgs = {
  id: Scalars['ID'];
};


export type MutationCourseOfActionAddArgs = {
  input?: InputMaybe<CourseOfActionAddInput>;
};


export type MutationCourseOfActionEditArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConnectorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImportArgs = {
  fileName?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID'];
};


export type MutationExternalReferenceAddArgs = {
  input?: InputMaybe<ExternalReferenceAddInput>;
};


export type MutationExternalReferenceEditArgs = {
  id: Scalars['ID'];
};


export type MutationGroupAddArgs = {
  input?: InputMaybe<GroupAddInput>;
};


export type MutationGroupEditArgs = {
  id: Scalars['ID'];
};


export type MutationIdentityAddArgs = {
  input?: InputMaybe<IdentityAddInput>;
};


export type MutationIdentityEditArgs = {
  id: Scalars['ID'];
};


export type MutationIncidentAddArgs = {
  input?: InputMaybe<IncidentAddInput>;
};


export type MutationIncidentEditArgs = {
  id: Scalars['ID'];
};


export type MutationIndicatorAddArgs = {
  input?: InputMaybe<IndicatorAddInput>;
};


export type MutationIndicatorEditArgs = {
  id: Scalars['ID'];
};


export type MutationIndividualAddArgs = {
  input?: InputMaybe<IndividualAddInput>;
};


export type MutationIndividualEditArgs = {
  id: Scalars['ID'];
};


export type MutationInfrastructureAddArgs = {
  input?: InputMaybe<InfrastructureAddInput>;
};


export type MutationInfrastructureEditArgs = {
  id: Scalars['ID'];
};


export type MutationIntrusionSetAddArgs = {
  input?: InputMaybe<IntrusionSetAddInput>;
};


export type MutationIntrusionSetEditArgs = {
  id: Scalars['ID'];
};


export type MutationKillChainPhaseAddArgs = {
  input?: InputMaybe<KillChainPhaseAddInput>;
};


export type MutationKillChainPhaseEditArgs = {
  id: Scalars['ID'];
};


export type MutationLabelAddArgs = {
  input?: InputMaybe<LabelAddInput>;
};


export type MutationLabelEditArgs = {
  id: Scalars['ID'];
};


export type MutationListTaskAddArgs = {
  input?: InputMaybe<ListTaskAddInput>;
};


export type MutationLocationAddArgs = {
  input?: InputMaybe<LocationAddInput>;
};


export type MutationLocationEditArgs = {
  id: Scalars['ID'];
};


export type MutationMalwareAddArgs = {
  input?: InputMaybe<MalwareAddInput>;
};


export type MutationMalwareEditArgs = {
  id: Scalars['ID'];
};


export type MutationMarkingDefinitionAddArgs = {
  input?: InputMaybe<MarkingDefinitionAddInput>;
};


export type MutationMarkingDefinitionEditArgs = {
  id: Scalars['ID'];
};


export type MutationMeEditArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type MutationNoteAddArgs = {
  input?: InputMaybe<NoteAddInput>;
};


export type MutationNoteEditArgs = {
  id: Scalars['ID'];
};


export type MutationObservedDataAddArgs = {
  input?: InputMaybe<ObservedDataAddInput>;
};


export type MutationObservedDataEditArgs = {
  id: Scalars['ID'];
};


export type MutationOpinionAddArgs = {
  input?: InputMaybe<OpinionAddInput>;
};


export type MutationOpinionEditArgs = {
  id: Scalars['ID'];
};


export type MutationOrganizationAddArgs = {
  input?: InputMaybe<OrganizationAddInput>;
};


export type MutationOrganizationEditArgs = {
  id: Scalars['ID'];
};


export type MutationPingConnectorArgs = {
  id: Scalars['ID'];
  state?: InputMaybe<Scalars['String']>;
};


export type MutationPositionAddArgs = {
  input?: InputMaybe<PositionAddInput>;
};


export type MutationPositionEditArgs = {
  id: Scalars['ID'];
};


export type MutationQueryTaskAddArgs = {
  input?: InputMaybe<QueryTaskAddInput>;
};


export type MutationRegionAddArgs = {
  input?: InputMaybe<RegionAddInput>;
};


export type MutationRegionEditArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterConnectorArgs = {
  input?: InputMaybe<RegisterConnectorInput>;
};


export type MutationReportAddArgs = {
  input?: InputMaybe<ReportAddInput>;
};


export type MutationReportEditArgs = {
  id: Scalars['ID'];
};


export type MutationResetStateConnectorArgs = {
  id: Scalars['ID'];
};


export type MutationRetentionRuleAddArgs = {
  input?: InputMaybe<RetentionRuleAddInput>;
};


export type MutationRetentionRuleCheckArgs = {
  input?: InputMaybe<RetentionRuleAddInput>;
};


export type MutationRetentionRuleEditArgs = {
  id: Scalars['ID'];
};


export type MutationRoleAddArgs = {
  input?: InputMaybe<RoleAddInput>;
};


export type MutationRoleEditArgs = {
  id: Scalars['ID'];
};


export type MutationRuleManagerCleanArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
};


export type MutationRuleSetActivationArgs = {
  enable: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationRuntimeAttributeEditArgs = {
  current: Scalars['String'];
  id: Scalars['String'];
  previous: Scalars['String'];
};


export type MutationSectorAddArgs = {
  input?: InputMaybe<SectorAddInput>;
};


export type MutationSectorEditArgs = {
  id: Scalars['ID'];
};


export type MutationSessionKillArgs = {
  id: Scalars['ID'];
};


export type MutationSettingsEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixCoreObjectEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixCoreRelationshipAddArgs = {
  input?: InputMaybe<StixCoreRelationshipAddInput>;
  reversedReturn?: InputMaybe<Scalars['Boolean']>;
};


export type MutationStixCoreRelationshipDeleteArgs = {
  fromId: Scalars['String'];
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};


export type MutationStixCoreRelationshipEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixCyberObservableAddArgs = {
  Artifact?: InputMaybe<ArtifactAddInput>;
  AutonomousSystem?: InputMaybe<AutonomousSystemAddInput>;
  Directory?: InputMaybe<DirectoryAddInput>;
  DomainName?: InputMaybe<DomainNameAddInput>;
  EmailAddr?: InputMaybe<EmailAddrAddInput>;
  EmailMessage?: InputMaybe<EmailMessageAddInput>;
  EmailMimePartType?: InputMaybe<EmailMimePartTypeAddInput>;
  IPv4Addr?: InputMaybe<IPv4AddrAddInput>;
  IPv6Addr?: InputMaybe<IPv6AddrAddInput>;
  MacAddr?: InputMaybe<MacAddrAddInput>;
  Mutex?: InputMaybe<MutexAddInput>;
  NetworkTraffic?: InputMaybe<NetworkTrafficAddInput>;
  Process?: InputMaybe<ProcessAddInput>;
  Software?: InputMaybe<SoftwareAddInput>;
  StixFile?: InputMaybe<StixFileAddInput>;
  Url?: InputMaybe<UrlAddInput>;
  UserAccount?: InputMaybe<UserAccountAddInput>;
  WindowsRegistryKey?: InputMaybe<WindowsRegistryKeyAddInput>;
  WindowsRegistryValueType?: InputMaybe<WindowsRegistryValueTypeAddInput>;
  X509Certificate?: InputMaybe<X509CertificateAddInput>;
  X509V3ExtensionsType?: InputMaybe<X509V3ExtensionsTypeAddInput>;
  XOpenCTICryptocurrencyWallet?: InputMaybe<XOpenCtiCryptocurrencyWalletAddInput>;
  XOpenCTICryptographicKey?: InputMaybe<XOpenCtiCryptographicKeyAddInput>;
  XOpenCTIHostname?: InputMaybe<XOpenCtiHostnameAddInput>;
  XOpenCTIText?: InputMaybe<XOpenCtiTextAddInput>;
  XOpenCTIUserAgent?: InputMaybe<XOpenCtiUserAgentAddInput>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  createIndicator?: InputMaybe<Scalars['Boolean']>;
  createdBy?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_description?: InputMaybe<Scalars['String']>;
  x_opencti_score?: InputMaybe<Scalars['Int']>;
};


export type MutationStixCyberObservableEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixCyberObservableRelationshipAddArgs = {
  input?: InputMaybe<StixCyberObservableRelationshipAddInput>;
};


export type MutationStixCyberObservableRelationshipEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixCyberObservablesExportAskArgs = {
  context?: InputMaybe<Scalars['String']>;
  exportType: Scalars['String'];
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservablesFiltering>>>;
  format: Scalars['String'];
  maxMarkingDefinition?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<StixCyberObservablesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationStixCyberObservablesExportPushArgs = {
  file: Scalars['Upload'];
  listFilters?: InputMaybe<Scalars['String']>;
};


export type MutationStixDomainObjectAddArgs = {
  input?: InputMaybe<StixDomainObjectAddInput>;
};


export type MutationStixDomainObjectEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixDomainObjectsDeleteArgs = {
  id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationStixDomainObjectsExportAskArgs = {
  context?: InputMaybe<Scalars['String']>;
  exportType: Scalars['String'];
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixDomainObjectsFiltering>>>;
  format: Scalars['String'];
  maxMarkingDefinition?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<StixDomainObjectsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};


export type MutationStixDomainObjectsExportPushArgs = {
  file: Scalars['Upload'];
  listFilters?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};


export type MutationStixEditArgs = {
  id: Scalars['ID'];
};


export type MutationStixSightingRelationshipAddArgs = {
  input?: InputMaybe<StixSightingRelationshipAddInput>;
};


export type MutationStixSightingRelationshipEditArgs = {
  id: Scalars['ID'];
};


export type MutationStreamCollectionAddArgs = {
  input?: InputMaybe<StreamCollectionAddInput>;
};


export type MutationStreamCollectionEditArgs = {
  id: Scalars['ID'];
};


export type MutationSubTypeEditArgs = {
  id: Scalars['ID'];
};


export type MutationSynchronizerAddArgs = {
  input?: InputMaybe<SynchronizerAddInput>;
};


export type MutationSynchronizerEditArgs = {
  id: Scalars['ID'];
};


export type MutationSynchronizerStartArgs = {
  id: Scalars['ID'];
};


export type MutationSynchronizerStopArgs = {
  id: Scalars['ID'];
};


export type MutationSynchronizerTestArgs = {
  input?: InputMaybe<SynchronizerAddInput>;
};


export type MutationSystemAddArgs = {
  input?: InputMaybe<SystemAddInput>;
};


export type MutationSystemEditArgs = {
  id: Scalars['ID'];
};


export type MutationTaxiiCollectionAddArgs = {
  input?: InputMaybe<TaxiiCollectionAddInput>;
};


export type MutationTaxiiCollectionEditArgs = {
  id: Scalars['ID'];
};


export type MutationThreatActorAddArgs = {
  input?: InputMaybe<ThreatActorAddInput>;
};


export type MutationThreatActorEditArgs = {
  id: Scalars['ID'];
};


export type MutationTokenArgs = {
  input?: InputMaybe<UserLoginInput>;
};


export type MutationToolAddArgs = {
  input?: InputMaybe<ToolAddInput>;
};


export type MutationToolEditArgs = {
  id: Scalars['ID'];
};


export type MutationUploadImportArgs = {
  file: Scalars['Upload'];
};


export type MutationUploadPendingArgs = {
  entityId?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationUserAddArgs = {
  input?: InputMaybe<UserAddInput>;
};


export type MutationUserEditArgs = {
  id: Scalars['ID'];
};


export type MutationUserSessionsKillArgs = {
  id: Scalars['ID'];
};


export type MutationUserSubscriptionAddArgs = {
  input?: InputMaybe<UserSubscriptionAddInput>;
};


export type MutationUserSubscriptionEditArgs = {
  id: Scalars['ID'];
};


export type MutationVulnerabilityAddArgs = {
  input?: InputMaybe<VulnerabilityAddInput>;
};


export type MutationVulnerabilityEditArgs = {
  id: Scalars['ID'];
};


export type MutationWorkAddArgs = {
  connectorId: Scalars['String'];
  friendlyName?: InputMaybe<Scalars['String']>;
};


export type MutationWorkDeleteArgs = {
  connectorId: Scalars['String'];
};


export type MutationWorkEditArgs = {
  id: Scalars['ID'];
};


export type MutationWorkspaceAddArgs = {
  input?: InputMaybe<WorkspaceAddInput>;
};


export type MutationWorkspaceEditArgs = {
  id: Scalars['ID'];
};

export type Mutex = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'Mutex';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutexConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type MutexExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type MutexStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutexStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MutexAddInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type NetworkTraffic = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'NetworkTraffic';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  dst_byte_count?: Maybe<Scalars['Int']>;
  dst_packets?: Maybe<Scalars['Int']>;
  dst_port?: Maybe<Scalars['Int']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  end?: Maybe<Scalars['DateTime']>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  extensions?: Maybe<Scalars['String']>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  protocols?: Maybe<Array<Maybe<Scalars['String']>>>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  src_byte_count?: Maybe<Scalars['Int']>;
  src_packets?: Maybe<Scalars['Int']>;
  src_port?: Maybe<Scalars['Int']>;
  standard_id: Scalars['String'];
  start?: Maybe<Scalars['DateTime']>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NetworkTrafficConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type NetworkTrafficExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NetworkTrafficStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NetworkTrafficStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NetworkTrafficAddInput = {
  dst_byte_count?: InputMaybe<Scalars['Int']>;
  dst_packets?: InputMaybe<Scalars['Int']>;
  dst_port?: InputMaybe<Scalars['Int']>;
  end?: InputMaybe<Scalars['DateTime']>;
  extensions?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  protocols?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  src_byte_count?: InputMaybe<Scalars['Int']>;
  src_packets?: InputMaybe<Scalars['Int']>;
  src_port?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type Note = BasicObject & Container & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Note';
  attribute_abstract?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  content: Scalars['String'];
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objects?: Maybe<StixObjectOrStixRelationshipConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NoteConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type NoteExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  all?: InputMaybe<Scalars['Boolean']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixObjectOrStixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixObjectOrStixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NoteOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NotePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type NoteStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NoteAddInput = {
  attribute_abstract?: InputMaybe<Scalars['String']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  content: Scalars['String'];
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NoteConnection = {
  __typename?: 'NoteConnection';
  edges?: Maybe<Array<Maybe<NoteEdge>>>;
  pageInfo: PageInfo;
};

export type NoteEdge = {
  __typename?: 'NoteEdge';
  cursor: Scalars['String'];
  node: Note;
};

export type NoteEditMutations = {
  __typename?: 'NoteEditMutations';
  contextClean?: Maybe<Note>;
  contextPatch?: Maybe<Note>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Note>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Note>;
};


export type NoteEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type NoteEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NoteEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type NoteEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum NotesFilter {
  AttributeAbstract = 'attribute_abstract',
  Authors = 'authors',
  Content = 'content',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  ObjectContains = 'objectContains',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type NotesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: NotesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum NotesOrdering {
  AttributeAbstract = 'attribute_abstract',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  Modified = 'modified',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Number = {
  __typename?: 'Number';
  count: Scalars['Int'];
  total: Scalars['Int'];
};

export type ObjectTotals = {
  __typename?: 'ObjectTotals';
  channels?: Maybe<Scalars['String']>;
  consumers?: Maybe<Scalars['String']>;
  queues?: Maybe<Scalars['String']>;
};

export type ObservedData = BasicObject & Container & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'ObservedData';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_observed: Scalars['DateTime'];
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  last_observed: Scalars['DateTime'];
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  number_observed: Scalars['Int'];
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objects?: Maybe<StixObjectOrStixRelationshipConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ObservedDataConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ObservedDataExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  all?: InputMaybe<Scalars['Boolean']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixObjectOrStixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixObjectOrStixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ObservedDataOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ObservedDataStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ObservedDataAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_observed: Scalars['DateTime'];
  lang?: InputMaybe<Scalars['String']>;
  last_observed: Scalars['DateTime'];
  modified?: InputMaybe<Scalars['DateTime']>;
  number_observed?: InputMaybe<Scalars['Int']>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objects: Array<InputMaybe<Scalars['String']>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ObservedDataConnection = {
  __typename?: 'ObservedDataConnection';
  edges?: Maybe<Array<Maybe<ObservedDataEdge>>>;
  pageInfo: PageInfo;
};

export type ObservedDataEdge = {
  __typename?: 'ObservedDataEdge';
  cursor: Scalars['String'];
  node: ObservedData;
};

export type ObservedDataEditMutations = {
  __typename?: 'ObservedDataEditMutations';
  contextClean?: Maybe<ObservedData>;
  contextPatch?: Maybe<ObservedData>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<ObservedData>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<ObservedData>;
};


export type ObservedDataEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type ObservedDataEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ObservedDataEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type ObservedDataEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum ObservedDatasFilter {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  FirstObserved = 'first_observed',
  LabelledBy = 'labelledBy',
  LastObserved = 'last_observed',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  NumberObserved = 'number_observed',
  ObjectContains = 'objectContains',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type ObservedDatasFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: ObservedDatasFilter;
  operator?: InputMaybe<Scalars['String']>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum ObservedDatasOrdering {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  FirstObserved = 'first_observed',
  LastObserved = 'last_observed',
  Modified = 'modified',
  NumberObserved = 'number_observed',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Opinion = BasicObject & Container & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Opinion';
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  explanation?: Maybe<Scalars['String']>;
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objects?: Maybe<StixObjectOrStixRelationshipConnection>;
  opinion: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OpinionConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type OpinionExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  all?: InputMaybe<Scalars['Boolean']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixObjectOrStixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixObjectOrStixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type OpinionOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OpinionStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OpinionAddInput = {
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  explanation?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  opinion: Scalars['String'];
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OpinionConnection = {
  __typename?: 'OpinionConnection';
  edges?: Maybe<Array<Maybe<OpinionEdge>>>;
  pageInfo: PageInfo;
};

export type OpinionEdge = {
  __typename?: 'OpinionEdge';
  cursor: Scalars['String'];
  node: Opinion;
};

export type OpinionEditMutations = {
  __typename?: 'OpinionEditMutations';
  contextClean?: Maybe<Opinion>;
  contextPatch?: Maybe<Opinion>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Opinion>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Opinion>;
};


export type OpinionEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type OpinionEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type OpinionEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type OpinionEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum OpinionsFilter {
  Authors = 'authors',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  Explanation = 'explanation',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  ObjectContains = 'objectContains',
  Opinion = 'opinion',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type OpinionsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: OpinionsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum OpinionsOrdering {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  Modified = 'modified',
  ObjectMarking = 'objectMarking',
  Opinion = 'opinion',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export enum OrderingMode {
  Asc = 'asc',
  Desc = 'desc'
}

export type Organization = BasicObject & Identity & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Organization';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  contact_information?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  identity_class: Scalars['String'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  sectors?: Maybe<SectorConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_organization_type?: Maybe<Scalars['String']>;
  x_opencti_reliability?: Maybe<OrganizationReliability>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrganizationConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type OrganizationExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganizationStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OrganizationAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  contact_information?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_organization_type?: InputMaybe<Scalars['String']>;
  x_opencti_reliability?: InputMaybe<OrganizationReliability>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  pageInfo: PageInfo;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String'];
  node: Organization;
};

export type OrganizationEditMutations = {
  __typename?: 'OrganizationEditMutations';
  contextClean?: Maybe<Organization>;
  contextPatch?: Maybe<Organization>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Organization>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Organization>;
};


export type OrganizationEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type OrganizationEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type OrganizationEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type OrganizationEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export type OrganizationOrIndividual = Individual | Organization;

export enum OrganizationReliability {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F'
}

export enum OrganizationsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XOpenctiOrganizationType = 'x_opencti_organization_type',
  XOpenctiReliability = 'x_opencti_reliability'
}

export type OrganizationsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: OrganizationsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum OrganizationsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  XOpenctiOrganizationType = 'x_opencti_organization_type'
}

export type OverviewMetrics = {
  __typename?: 'OverviewMetrics';
  message_stats?: Maybe<MessagesStats>;
  node?: Maybe<Scalars['String']>;
  object_totals?: Maybe<ObjectTotals>;
  queue_totals?: Maybe<QueueTotals>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  globalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Position = BasicObject & Location & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Position';
  city?: Maybe<City>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  postal_code?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['Float']>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  street_address?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type PositionConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type PositionExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type PositionStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PositionAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  postal_code?: InputMaybe<Scalars['String']>;
  precision?: InputMaybe<Scalars['Float']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  street_address?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PositionConnection = {
  __typename?: 'PositionConnection';
  edges?: Maybe<Array<Maybe<PositionEdge>>>;
  pageInfo: PageInfo;
};

export type PositionEdge = {
  __typename?: 'PositionEdge';
  cursor: Scalars['String'];
  node: Position;
};

export type PositionEditMutations = {
  __typename?: 'PositionEditMutations';
  contextClean?: Maybe<Position>;
  contextPatch?: Maybe<Position>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Position>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Position>;
};


export type PositionEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type PositionEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PositionEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type PositionEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum PositionsFilter {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type PositionsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: PositionsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum PositionsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  PostalAddress = 'postal_address',
  PostalCode = 'postal_code',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Process = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'Process';
  command_line?: Maybe<Scalars['String']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  created_time?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<User>;
  cwd?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  environment_variables?: Maybe<Array<Maybe<Scalars['String']>>>;
  exportFiles?: Maybe<FileConnection>;
  extensions?: Maybe<Scalars['String']>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_hidden?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  pid?: Maybe<Scalars['Int']>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProcessConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ProcessExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ProcessStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProcessStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProcessAddInput = {
  command_line?: InputMaybe<Scalars['String']>;
  created_time?: InputMaybe<Scalars['DateTime']>;
  cwd?: InputMaybe<Scalars['String']>;
  environment_variables?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  extensions?: InputMaybe<Scalars['String']>;
  is_hidden?: InputMaybe<Scalars['Boolean']>;
  pid?: InputMaybe<Scalars['Int']>;
};

export type Provider = {
  __typename?: 'Provider';
  name: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AppInfo>;
  attackPattern?: Maybe<AttackPattern>;
  attackPatterns?: Maybe<AttackPatternConnection>;
  bookmarks?: Maybe<StixDomainObjectConnection>;
  campaign?: Maybe<Campaign>;
  campaigns?: Maybe<CampaignConnection>;
  campaignsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  capabilities?: Maybe<CapabilityConnection>;
  cities?: Maybe<CityConnection>;
  city?: Maybe<City>;
  connector?: Maybe<Connector>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  connectorsForExport?: Maybe<Array<Maybe<Connector>>>;
  connectorsForImport?: Maybe<Array<Maybe<Connector>>>;
  container?: Maybe<Container>;
  containers?: Maybe<ContainerConnection>;
  containersObjectsOfObject?: Maybe<StixObjectOrStixRelationshipConnection>;
  countries?: Maybe<CountryConnection>;
  country?: Maybe<Country>;
  courseOfAction?: Maybe<CourseOfAction>;
  coursesOfAction?: Maybe<CourseOfActionConnection>;
  elasticSearchMetrics?: Maybe<ElasticSearchMetrics>;
  externalReference?: Maybe<ExternalReference>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  file?: Maybe<File>;
  group?: Maybe<Group>;
  groups?: Maybe<GroupConnection>;
  identities?: Maybe<IdentityConnection>;
  identity?: Maybe<Identity>;
  importFiles?: Maybe<FileConnection>;
  incident?: Maybe<Incident>;
  incidents?: Maybe<IncidentConnection>;
  incidentsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  indicator?: Maybe<Indicator>;
  indicators?: Maybe<IndicatorConnection>;
  indicatorsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  indicatorsNumber?: Maybe<Number>;
  indicatorsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  individual?: Maybe<Individual>;
  individuals?: Maybe<IndividualConnection>;
  infrastructure?: Maybe<Infrastructure>;
  infrastructures?: Maybe<InfrastructureConnection>;
  intrusionSet?: Maybe<IntrusionSet>;
  intrusionSets?: Maybe<IntrusionSetConnection>;
  killChainPhase?: Maybe<KillChainPhase>;
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  label?: Maybe<Label>;
  labels?: Maybe<LabelConnection>;
  location?: Maybe<Location>;
  locations?: Maybe<LocationConnection>;
  logs?: Maybe<LogConnection>;
  logsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  logsWorkerConfig?: Maybe<LogsWorkerConfig>;
  malware?: Maybe<Malware>;
  malwares?: Maybe<MalwareConnection>;
  markingDefinition?: Maybe<MarkingDefinition>;
  markingDefinitions?: Maybe<MarkingDefinitionConnection>;
  me?: Maybe<User>;
  myOpinion?: Maybe<Opinion>;
  note?: Maybe<Note>;
  noteContainsStixObjectOrStixRelationship?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<NoteConnection>;
  notesDistribution?: Maybe<Array<Maybe<Distribution>>>;
  notesNumber?: Maybe<Number>;
  notesTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  observedData?: Maybe<ObservedData>;
  observedDataContainsStixObjectOrStixRelationship?: Maybe<Scalars['Boolean']>;
  observedDatas?: Maybe<ObservedDataConnection>;
  observedDatasDistribution?: Maybe<Array<Maybe<Distribution>>>;
  observedDatasNumber?: Maybe<Number>;
  observedDatasTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  opinion?: Maybe<Opinion>;
  opinionContainsStixObjectOrStixRelationship?: Maybe<Scalars['Boolean']>;
  opinions?: Maybe<OpinionConnection>;
  opinionsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  opinionsNumber?: Maybe<Number>;
  opinionsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  organization?: Maybe<Organization>;
  organizations?: Maybe<OrganizationConnection>;
  pendingFiles?: Maybe<FileConnection>;
  platform_theme?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  positions?: Maybe<PositionConnection>;
  rabbitMQMetrics?: Maybe<RabbitMqMetrics>;
  region?: Maybe<Region>;
  regions?: Maybe<RegionConnection>;
  report?: Maybe<Report>;
  reportContainsStixObjectOrStixRelationship?: Maybe<Scalars['Boolean']>;
  reports?: Maybe<ReportConnection>;
  reportsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  reportsNumber?: Maybe<Number>;
  reportsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  retentionRule?: Maybe<RetentionRule>;
  retentionRules?: Maybe<RetentionRuleConnection>;
  role?: Maybe<Role>;
  roles?: Maybe<RoleConnection>;
  rule?: Maybe<Rule>;
  ruleManagerInfo?: Maybe<RuleManager>;
  rules?: Maybe<Array<Maybe<Rule>>>;
  runtimeAttributes?: Maybe<AttributeConnection>;
  schemaAttributes?: Maybe<AttributeConnection>;
  sector?: Maybe<Sector>;
  sectors?: Maybe<SectorConnection>;
  sessions?: Maybe<Array<Maybe<UserSession>>>;
  settings?: Maybe<Settings>;
  status?: Maybe<Status>;
  statusTemplate?: Maybe<StatusTemplate>;
  statusTemplates?: Maybe<StatusTemplateConnection>;
  statuses?: Maybe<StatusConnection>;
  stixCoreObject?: Maybe<StixCoreObject>;
  stixCoreObjectOrStixCoreRelationship?: Maybe<StixCoreObjectOrStixCoreRelationship>;
  stixCoreObjectRaw?: Maybe<Scalars['String']>;
  stixCoreObjects?: Maybe<StixCoreObjectConnection>;
  stixCoreRelationship?: Maybe<StixCoreRelationship>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCoreRelationshipsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  stixCoreRelationshipsNumber?: Maybe<Number>;
  stixCoreRelationshipsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  stixCyberObservable?: Maybe<StixCyberObservable>;
  stixCyberObservableRelationship?: Maybe<StixCyberObservableRelationship>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  stixCyberObservableRelationshipsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  stixCyberObservableRelationshipsNumber?: Maybe<Number>;
  stixCyberObservableRelationshipsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  stixCyberObservables?: Maybe<StixCyberObservableConnection>;
  stixCyberObservablesDistribution?: Maybe<Array<Maybe<Distribution>>>;
  stixCyberObservablesExportFiles?: Maybe<FileConnection>;
  stixCyberObservablesNumber?: Maybe<Number>;
  stixCyberObservablesTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  stixDomainObject?: Maybe<StixDomainObject>;
  stixDomainObjects?: Maybe<StixDomainObjectConnection>;
  stixDomainObjectsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  stixDomainObjectsExportFiles?: Maybe<FileConnection>;
  stixDomainObjectsNumber?: Maybe<Number>;
  stixDomainObjectsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  stixMetaRelationship?: Maybe<StixMetaRelationship>;
  stixMetaRelationships?: Maybe<StixMetaRelationshipConnection>;
  stixMetaRelationshipsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  stixMetaRelationshipsNumber?: Maybe<Number>;
  stixObjectOrStixRelationship?: Maybe<StixObjectOrStixRelationship>;
  stixRelationship?: Maybe<StixRelationship>;
  stixRelationships?: Maybe<StixRelationshipConnection>;
  stixSightingRelationship?: Maybe<StixSightingRelationship>;
  stixSightingRelationships?: Maybe<StixSightingRelationshipConnection>;
  stixSightingRelationshipsDistribution?: Maybe<Array<Maybe<Distribution>>>;
  stixSightingRelationshipsNumber?: Maybe<Number>;
  stixSightingRelationshipsTimeSeries?: Maybe<Array<Maybe<TimeSeries>>>;
  streamCollection?: Maybe<StreamCollection>;
  streamCollections?: Maybe<StreamCollectionConnection>;
  subType?: Maybe<SubType>;
  subTypes?: Maybe<SubTypeConnection>;
  synchronizer?: Maybe<Synchronizer>;
  synchronizers?: Maybe<SynchronizerConnection>;
  system?: Maybe<System>;
  systems?: Maybe<SystemConnection>;
  task?: Maybe<Task>;
  tasks?: Maybe<TaskConnection>;
  taxiiCollection?: Maybe<TaxiiCollection>;
  taxiiCollections?: Maybe<TaxiiCollectionConnection>;
  threatActor?: Maybe<ThreatActor>;
  threatActors?: Maybe<ThreatActorConnection>;
  tool?: Maybe<Tool>;
  tools?: Maybe<ToolConnection>;
  user?: Maybe<User>;
  userSubscription?: Maybe<UserSubscription>;
  userSubscriptions?: Maybe<UserSubscriptionConnection>;
  users?: Maybe<UserConnection>;
  vulnerabilities?: Maybe<VulnerabilityConnection>;
  vulnerability?: Maybe<Vulnerability>;
  work?: Maybe<Work>;
  works?: Maybe<WorkConnection>;
  workspace?: Maybe<Workspace>;
  workspaces?: Maybe<WorkspaceConnection>;
};


export type QueryAttackPatternArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryAttackPatternsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<AttackPatternsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AttackPatternsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBookmarksArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCampaignArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCampaignsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<CampaignsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CampaignsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCampaignsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  relationship_type?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};


export type QueryCapabilitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<CitiesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CitiesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCityArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryConnectorArgs = {
  id: Scalars['String'];
};


export type QueryContainerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContainersArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ContainersFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContainersOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContainersObjectsOfObjectArgs = {
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ContainersFiltering>>>;
  id: Scalars['String'];
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<CountriesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CountriesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCourseOfActionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCoursesOfActionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<CoursesOfActionFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CoursesOfActionOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryExternalReferenceArgs = {
  id: Scalars['String'];
};


export type QueryExternalReferencesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ExternalReferencesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExternalReferencesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFileArgs = {
  id: Scalars['String'];
};


export type QueryGroupArgs = {
  id: Scalars['String'];
};


export type QueryGroupsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GroupsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryIdentitiesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<IdentitiesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IdentitiesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIdentityArgs = {
  id: Scalars['String'];
};


export type QueryImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryIncidentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryIncidentsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<IncidentsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IncidentsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryIncidentsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  relationship_type?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};


export type QueryIndicatorArgs = {
  id: Scalars['String'];
};


export type QueryIndicatorsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<IndicatorsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndicatorsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryIndicatorsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type QueryIndicatorsNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  objectId?: InputMaybe<Scalars['String']>;
  pattern_type?: InputMaybe<Scalars['String']>;
};


export type QueryIndicatorsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  pattern_type?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};


export type QueryIndividualArgs = {
  id: Scalars['String'];
};


export type QueryIndividualsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<IndividualsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IndividualsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryInfrastructureArgs = {
  id: Scalars['String'];
};


export type QueryInfrastructuresArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<InfrastructuresFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InfrastructuresOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryIntrusionSetArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryIntrusionSetsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<IntrusionSetsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<IntrusionSetsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryKillChainPhaseArgs = {
  id: Scalars['String'];
};


export type QueryKillChainPhasesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<KillChainPhasesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<KillChainPhasesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryLabelArgs = {
  id: Scalars['String'];
};


export type QueryLabelsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<LabelsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LabelsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryLocationArgs = {
  id: Scalars['String'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<LocationsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LocationsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLogsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<LogsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LogsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryLogsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryMalwareArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryMalwaresArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<MalwaresFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MalwaresOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMarkingDefinitionArgs = {
  id: Scalars['String'];
};


export type QueryMarkingDefinitionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<MarkingDefinitionsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarkingDefinitionsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMyOpinionArgs = {
  id: Scalars['String'];
};


export type QueryNoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryNoteContainsStixObjectOrStixRelationshipArgs = {
  id: Scalars['String'];
  stixObjectOrStixRelationshipId: Scalars['String'];
};


export type QueryNotesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<NotesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NotesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNotesDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
};


export type QueryNotesNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  objectId?: InputMaybe<Scalars['String']>;
};


export type QueryNotesTimeSeriesArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
};


export type QueryObservedDataArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryObservedDataContainsStixObjectOrStixRelationshipArgs = {
  id: Scalars['String'];
  stixObjectOrStixRelationshipId: Scalars['String'];
};


export type QueryObservedDatasArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ObservedDatasFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ObservedDatasOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryObservedDatasDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
};


export type QueryObservedDatasNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  objectId?: InputMaybe<Scalars['String']>;
};


export type QueryObservedDatasTimeSeriesArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
};


export type QueryOpinionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryOpinionContainsStixObjectOrStixRelationshipArgs = {
  id: Scalars['String'];
  stixObjectOrStixRelationshipId: Scalars['String'];
};


export type QueryOpinionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<OpinionsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpinionsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryOpinionsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
};


export type QueryOpinionsNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  objectId?: InputMaybe<Scalars['String']>;
};


export type QueryOpinionsTimeSeriesArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
};


export type QueryOrganizationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<OrganizationsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OrganizationsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryPositionArgs = {
  id: Scalars['String'];
};


export type QueryPositionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<PositionsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRabbitMqMetricsArgs = {
  prefix?: InputMaybe<Scalars['String']>;
};


export type QueryRegionArgs = {
  id: Scalars['String'];
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<RegionsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegionsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryReportArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryReportContainsStixObjectOrStixRelationshipArgs = {
  id: Scalars['String'];
  stixObjectOrStixRelationshipId: Scalars['String'];
};


export type QueryReportsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ReportsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReportsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryReportsDistributionArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  dateAttribute?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type QueryReportsNumberArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  objectId?: InputMaybe<Scalars['String']>;
  reportType?: InputMaybe<Scalars['String']>;
};


export type QueryReportsTimeSeriesArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  interval: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  reportType?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};


export type QueryRetentionRuleArgs = {
  id: Scalars['String'];
};


export type QueryRetentionRulesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryRoleArgs = {
  id: Scalars['String'];
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RolesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryRuleArgs = {
  id: Scalars['String'];
};


export type QueryRuntimeAttributesArgs = {
  attributeName: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QuerySchemaAttributesArgs = {
  elementType: Scalars['String'];
};


export type QuerySectorArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySectorsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<SectorsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SectorsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryStatusArgs = {
  id: Scalars['String'];
};


export type QueryStatusTemplateArgs = {
  id: Scalars['String'];
};


export type QueryStatusTemplatesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StatusTemplateOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
};


export type QueryStatusesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StatusesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StatusOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryStixCoreObjectArgs = {
  id: Scalars['String'];
};


export type QueryStixCoreObjectOrStixCoreRelationshipArgs = {
  id: Scalars['String'];
};


export type QueryStixCoreObjectRawArgs = {
  id: Scalars['String'];
};


export type QueryStixCoreObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreObjectsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixCoreObjectsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCoreRelationshipArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  elementId?: InputMaybe<Scalars['String']>;
  elementWithTargetTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromRole?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stix?: InputMaybe<Scalars['Boolean']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toRole?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCoreRelationshipsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  fromId?: InputMaybe<Scalars['String']>;
  isTo?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  noDirection?: InputMaybe<Scalars['Boolean']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  relationship_type?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCoreRelationshipsNumberArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  noDirection?: InputMaybe<Scalars['Boolean']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryStixCoreRelationshipsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  fromId?: InputMaybe<Scalars['String']>;
  interval: Scalars['String'];
  operation: StatsOperation;
  relationship_type?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCyberObservableArgs = {
  id: Scalars['String'];
};


export type QueryStixCyberObservableRelationshipArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  elementId?: InputMaybe<Scalars['String']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCyberObservableRelationshipsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  fromId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCyberObservableRelationshipsNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
};


export type QueryStixCyberObservableRelationshipsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  fromId?: InputMaybe<Scalars['String']>;
  interval: Scalars['String'];
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
};


export type QueryStixCyberObservablesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservablesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixCyberObservablesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCyberObservablesDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  field: Scalars['String'];
  objectId?: InputMaybe<Scalars['String']>;
  operation: Scalars['String'];
};


export type QueryStixCyberObservablesExportFilesArgs = {
  context?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryStixCyberObservablesNumberArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixCyberObservablesTimeSeriesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type QueryStixDomainObjectArgs = {
  id: Scalars['String'];
};


export type QueryStixDomainObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixDomainObjectsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixDomainObjectsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixDomainObjectsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  objectId?: InputMaybe<Scalars['String']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  relationship_type: Scalars['String'];
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixDomainObjectsExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};


export type QueryStixDomainObjectsNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixDomainObjectsTimeSeriesArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  interval: Scalars['String'];
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
  type?: InputMaybe<Scalars['String']>;
};


export type QueryStixMetaRelationshipArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryStixMetaRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  elementId?: InputMaybe<Scalars['String']>;
  elementWithTargetTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixMetaRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromRole?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixMetaRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stix?: InputMaybe<Scalars['Boolean']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toRole?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixMetaRelationshipsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  relationship_type?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixMetaRelationshipsNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryStixObjectOrStixRelationshipArgs = {
  id: Scalars['String'];
};


export type QueryStixRelationshipArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryStixRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  elementId?: InputMaybe<Scalars['String']>;
  elementWithTargetTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromRole?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stix?: InputMaybe<Scalars['Boolean']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toRole?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixSightingRelationshipArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryStixSightingRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  elementId?: InputMaybe<Scalars['String']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixSightingRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixSightingRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toId?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixSightingRelationshipsDistributionArgs = {
  dateAttribute?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  field: Scalars['String'];
  fromId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  operation: StatsOperation;
  order?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStixSightingRelationshipsNumberArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
};


export type QueryStixSightingRelationshipsTimeSeriesArgs = {
  endDate: Scalars['DateTime'];
  field: Scalars['String'];
  fromId?: InputMaybe<Scalars['String']>;
  interval: Scalars['String'];
  operation: StatsOperation;
  startDate: Scalars['DateTime'];
};


export type QueryStreamCollectionArgs = {
  id: Scalars['String'];
};


export type QueryStreamCollectionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StreamCollectionOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QuerySubTypeArgs = {
  id: Scalars['String'];
};


export type QuerySubTypesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  includeParents?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<SubTypesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QuerySynchronizerArgs = {
  id: Scalars['String'];
};


export type QuerySynchronizersArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SynchronizersOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QuerySystemArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<SystemsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SystemsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTaskArgs = {
  id: Scalars['String'];
};


export type QueryTasksArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<TasksFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TasksOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTaxiiCollectionArgs = {
  id: Scalars['String'];
};


export type QueryTaxiiCollectionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TaxiiCollectionOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryThreatActorArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryThreatActorsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ThreatActorsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ThreatActorsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryToolArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryToolsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<ToolsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ToolsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUserSubscriptionArgs = {
  id: Scalars['String'];
};


export type QueryUserSubscriptionsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserSubscriptionOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<UsersFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsersOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVulnerabilitiesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<VulnerabilitiesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VulnerabilitiesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  toStix?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVulnerabilityArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryWorkArgs = {
  id: Scalars['ID'];
};


export type QueryWorksArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<WorksFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorksOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryWorkspaceArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryWorkspacesArgs = {
  after?: InputMaybe<Scalars['ID']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<WorkspacesFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WorkspacesOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
};

export type QueryTask = Task & {
  __typename?: 'QueryTask';
  actions?: Maybe<Array<Maybe<TaskAction>>>;
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<TaskError>>>;
  id: Scalars['ID'];
  initiator?: Maybe<User>;
  last_execution_date?: Maybe<Scalars['DateTime']>;
  task_expected_number?: Maybe<Scalars['Int']>;
  task_filters: Scalars['String'];
  task_processed_number?: Maybe<Scalars['Int']>;
  task_search?: Maybe<Scalars['String']>;
  type?: Maybe<TaskType>;
};

export type QueryTaskAddInput = {
  actions: Array<InputMaybe<TaskActionInput>>;
  filters: Scalars['String'];
  search?: InputMaybe<Scalars['String']>;
};

export type QueueArguments = {
  __typename?: 'QueueArguments';
  config?: Maybe<Scalars['String']>;
};

export type QueueMetrics = {
  __typename?: 'QueueMetrics';
  arguments?: Maybe<QueueArguments>;
  consumers?: Maybe<Scalars['String']>;
  idle_since?: Maybe<Scalars['DateTime']>;
  message_stats?: Maybe<MessagesStats>;
  messages?: Maybe<Scalars['String']>;
  messages_ready?: Maybe<Scalars['String']>;
  messages_unacknowledged?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type QueueTotals = {
  __typename?: 'QueueTotals';
  messages?: Maybe<Scalars['String']>;
  messages_ready?: Maybe<Scalars['String']>;
  messages_unacknowledged?: Maybe<Scalars['String']>;
};

export type RabbitMqConnection = {
  __typename?: 'RabbitMQConnection';
  ca?: Maybe<Array<Maybe<Scalars['String']>>>;
  host: Scalars['String'];
  pass: Scalars['String'];
  port: Scalars['Int'];
  use_ssl: Scalars['Boolean'];
  user: Scalars['String'];
};

export type RabbitMqMetrics = {
  __typename?: 'RabbitMQMetrics';
  consumers?: Maybe<Scalars['String']>;
  overview?: Maybe<OverviewMetrics>;
  queues?: Maybe<Array<Maybe<QueueMetrics>>>;
};

export type Region = BasicObject & Location & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Region';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  countries?: Maybe<CountryConnection>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  isSubRegion?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parentRegions?: Maybe<RegionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  precision?: Maybe<Scalars['Float']>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  subRegions?: Maybe<RegionConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type RegionConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type RegionExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type RegionStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RegionAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  precision?: InputMaybe<Scalars['Float']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RegionConnection = {
  __typename?: 'RegionConnection';
  edges?: Maybe<Array<Maybe<RegionEdge>>>;
  pageInfo: PageInfo;
};

export type RegionEdge = {
  __typename?: 'RegionEdge';
  cursor: Scalars['String'];
  node: Region;
};

export type RegionEditMutations = {
  __typename?: 'RegionEditMutations';
  contextClean?: Maybe<Region>;
  contextPatch?: Maybe<Region>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Region>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Region>;
};


export type RegionEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type RegionEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RegionEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type RegionEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum RegionsFilter {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  StatusId = 'status_id'
}

export type RegionsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: RegionsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum RegionsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Description = 'description',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type RegisterConnectorInput = {
  auto?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  only_contextual?: InputMaybe<Scalars['Boolean']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
  type: ConnectorType;
};

export type Report = BasicObject & Container & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Report';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  objects?: Maybe<StixObjectOrStixRelationshipConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  published?: Maybe<Scalars['DateTime']>;
  report_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ReportConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ReportExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  all?: InputMaybe<Scalars['Boolean']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixObjectOrStixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixObjectOrStixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ReportOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ReportStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ReportAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  published: Scalars['DateTime'];
  report_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ReportConnection = {
  __typename?: 'ReportConnection';
  edges?: Maybe<Array<Maybe<ReportEdge>>>;
  pageInfo: PageInfo;
};

export type ReportEdge = {
  __typename?: 'ReportEdge';
  cursor: Scalars['String'];
  node: Report;
};

export type ReportEditMutations = {
  __typename?: 'ReportEditMutations';
  contextClean?: Maybe<Report>;
  contextPatch?: Maybe<Report>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Report>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Report>;
};


export type ReportEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type ReportEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ReportEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type ReportEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum ReportsFilter {
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Name = 'name',
  ObjectContains = 'objectContains',
  ObjectLabel = 'objectLabel',
  Published = 'published',
  PublishedDay = 'published_day',
  ReportTypes = 'report_types',
  Revoked = 'revoked',
  StatusId = 'status_id'
}

export type ReportsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: ReportsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum ReportsOrdering {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  Published = 'published',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type RetentionRule = {
  __typename?: 'RetentionRule';
  filters: Scalars['String'];
  id: Scalars['ID'];
  last_deleted_count?: Maybe<Scalars['Int']>;
  last_execution_date?: Maybe<Scalars['DateTime']>;
  max_retention: Scalars['Int'];
  name: Scalars['String'];
  remaining_count?: Maybe<Scalars['Int']>;
  standard_id: Scalars['String'];
};

export type RetentionRuleAddInput = {
  filters: Scalars['String'];
  max_retention: Scalars['Int'];
  name: Scalars['String'];
};

export type RetentionRuleConnection = {
  __typename?: 'RetentionRuleConnection';
  edges?: Maybe<Array<Maybe<RetentionRuleEdge>>>;
  pageInfo: PageInfo;
};

export type RetentionRuleEdge = {
  __typename?: 'RetentionRuleEdge';
  cursor: Scalars['String'];
  node: RetentionRule;
};

export type RetentionRuleEditMutations = {
  __typename?: 'RetentionRuleEditMutations';
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<RetentionRule>;
};


export type RetentionRuleEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export type Role = BasicObject & InternalObject & {
  __typename?: 'Role';
  capabilities?: Maybe<Array<Maybe<Capability>>>;
  created_at: Scalars['DateTime'];
  default_assignation?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type RoleAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String'];
  node: Role;
};

export type RoleEditMutations = {
  __typename?: 'RoleEditMutations';
  contextClean?: Maybe<Role>;
  contextPatch?: Maybe<Role>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Role>;
  relationAdd?: Maybe<InternalRelationship>;
  relationDelete?: Maybe<Role>;
};


export type RoleEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type RoleEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type RoleEditMutationsRelationAddArgs = {
  input?: InputMaybe<InternalRelationshipAddInput>;
};


export type RoleEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum RolesOrdering {
  CreatedAt = 'created_at',
  DefaultAssignation = 'default_assignation',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Rule = {
  __typename?: 'Rule';
  activated: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type RuleExecutionError = {
  __typename?: 'RuleExecutionError';
  error?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type RuleManager = {
  __typename?: 'RuleManager';
  activated: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<RuleExecutionError>>>;
  id: Scalars['ID'];
  lastEventId?: Maybe<Scalars['String']>;
};

export type RuleTask = Task & {
  __typename?: 'RuleTask';
  actions?: Maybe<Array<Maybe<TaskAction>>>;
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  enable?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<TaskError>>>;
  id: Scalars['ID'];
  initiator?: Maybe<User>;
  last_execution_date?: Maybe<Scalars['DateTime']>;
  rule: Scalars['ID'];
  task_expected_number?: Maybe<Scalars['Int']>;
  task_processed_number?: Maybe<Scalars['Int']>;
  type?: Maybe<TaskType>;
};

export type SearchMetrics = {
  __typename?: 'SearchMetrics';
  fetch_total?: Maybe<Scalars['String']>;
  query_total?: Maybe<Scalars['String']>;
};

export type Sector = BasicObject & Identity & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Sector';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  contact_information?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  identity_class: Scalars['String'];
  importFiles?: Maybe<FileConnection>;
  isSubSector?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parentSectors?: Maybe<SectorConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  subSectors?: Maybe<SectorConnection>;
  targetedOrganizations?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SectorConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type SectorExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SectorStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectorAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  contact_information?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectorConnection = {
  __typename?: 'SectorConnection';
  edges?: Maybe<Array<Maybe<SectorEdge>>>;
  pageInfo: PageInfo;
};

export type SectorEdge = {
  __typename?: 'SectorEdge';
  cursor: Scalars['String'];
  node: Sector;
};

export type SectorEditMutations = {
  __typename?: 'SectorEditMutations';
  contextClean?: Maybe<Sector>;
  contextPatch?: Maybe<Sector>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Sector>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Sector>;
};


export type SectorEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type SectorEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SectorEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type SectorEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum SectorsFilter {
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  PartOf = 'partOf',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type SectorsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: SectorsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum SectorsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  CreatedAt = 'created_at',
  Description = 'description',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type SessionDetail = {
  __typename?: 'SessionDetail';
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  ttl?: Maybe<Scalars['Int']>;
};

export type Settings = BasicObject & InternalObject & {
  __typename?: 'Settings';
  created_at: Scalars['DateTime'];
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  parent_types: Array<Maybe<Scalars['String']>>;
  platform_email?: Maybe<Scalars['String']>;
  platform_enable_reference?: Maybe<Array<Maybe<Scalars['String']>>>;
  platform_feature_flags?: Maybe<Array<Maybe<Module>>>;
  platform_language?: Maybe<Scalars['String']>;
  platform_login_message?: Maybe<Scalars['String']>;
  platform_map_tile_server_dark?: Maybe<Scalars['String']>;
  platform_map_tile_server_light?: Maybe<Scalars['String']>;
  platform_modules?: Maybe<Array<Maybe<Module>>>;
  platform_providers?: Maybe<Array<Maybe<Provider>>>;
  platform_reference_attachment?: Maybe<Scalars['Boolean']>;
  platform_theme?: Maybe<Scalars['String']>;
  platform_theme_dark_accent?: Maybe<Scalars['String']>;
  platform_theme_dark_background?: Maybe<Scalars['String']>;
  platform_theme_dark_logo?: Maybe<Scalars['String']>;
  platform_theme_dark_logo_login?: Maybe<Scalars['String']>;
  platform_theme_dark_nav?: Maybe<Scalars['String']>;
  platform_theme_dark_paper?: Maybe<Scalars['String']>;
  platform_theme_dark_primary?: Maybe<Scalars['String']>;
  platform_theme_dark_secondary?: Maybe<Scalars['String']>;
  platform_theme_light_accent?: Maybe<Scalars['String']>;
  platform_theme_light_background?: Maybe<Scalars['String']>;
  platform_theme_light_logo?: Maybe<Scalars['String']>;
  platform_theme_light_logo_login?: Maybe<Scalars['String']>;
  platform_theme_light_nav?: Maybe<Scalars['String']>;
  platform_theme_light_paper?: Maybe<Scalars['String']>;
  platform_theme_light_primary?: Maybe<Scalars['String']>;
  platform_theme_light_secondary?: Maybe<Scalars['String']>;
  platform_title?: Maybe<Scalars['String']>;
  platform_url?: Maybe<Scalars['String']>;
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type SettingsEditMutations = {
  __typename?: 'SettingsEditMutations';
  contextClean?: Maybe<Settings>;
  contextPatch?: Maybe<Settings>;
  fieldPatch?: Maybe<Settings>;
};


export type SettingsEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type SettingsEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export type Software = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'Software';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  cpe?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  swid?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  vendor?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SoftwareConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type SoftwareExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwarePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SoftwareStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SoftwareStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SoftwareAddInput = {
  cpe?: InputMaybe<Scalars['String']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  swid?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export enum State {
  Complete = 'complete',
  Progress = 'progress',
  Timeout = 'timeout',
  Wait = 'wait'
}

export enum StatsOperation {
  Count = 'count',
  Sum = 'sum'
}

export type Status = {
  __typename?: 'Status';
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  order: Scalars['Int'];
  template?: Maybe<StatusTemplate>;
  template_id: Scalars['String'];
  type: Scalars['String'];
};

export type StatusAddInput = {
  order: Scalars['Int'];
  template_id: Scalars['String'];
};

export type StatusConnection = {
  __typename?: 'StatusConnection';
  edges?: Maybe<Array<Maybe<StatusEdge>>>;
  pageInfo: PageInfo;
};

export type StatusEdge = {
  __typename?: 'StatusEdge';
  cursor: Scalars['String'];
  node: Status;
};

export enum StatusFilter {
  Type = 'type'
}

export enum StatusOrdering {
  Order = 'order',
  Type = 'type'
}

export type StatusTemplate = {
  __typename?: 'StatusTemplate';
  color: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StatusTemplateConnection = {
  __typename?: 'StatusTemplateConnection';
  edges?: Maybe<Array<Maybe<StatusTemplateEdge>>>;
  pageInfo: PageInfo;
};

export type StatusTemplateEdge = {
  __typename?: 'StatusTemplateEdge';
  cursor: Scalars['String'];
  node: StatusTemplate;
};

export enum StatusTemplateOrdering {
  Name = 'name'
}

export type StatusesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StatusFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixCoreObject = {
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StixCoreObjectConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type StixCoreObjectExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreObjectStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixCoreObjectConnection = {
  __typename?: 'StixCoreObjectConnection';
  edges?: Maybe<Array<Maybe<StixCoreObjectEdge>>>;
  pageInfo: PageInfo;
};

export type StixCoreObjectEdge = {
  __typename?: 'StixCoreObjectEdge';
  cursor: Scalars['String'];
  node: StixCoreObject;
};

export type StixCoreObjectEditMutations = {
  __typename?: 'StixCoreObjectEditMutations';
  askEnrichment?: Maybe<Work>;
  exportAsk?: Maybe<Array<Maybe<File>>>;
  exportPush?: Maybe<Scalars['Boolean']>;
  importPush?: Maybe<File>;
  merge?: Maybe<StixCoreObject>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<StixCoreObject>;
  relationsAdd?: Maybe<StixCoreObject>;
};


export type StixCoreObjectEditMutationsAskEnrichmentArgs = {
  connectorId: Scalars['ID'];
};


export type StixCoreObjectEditMutationsExportAskArgs = {
  exportType: Scalars['String'];
  format: Scalars['String'];
  maxMarkingDefinition?: InputMaybe<Scalars['String']>;
};


export type StixCoreObjectEditMutationsExportPushArgs = {
  file: Scalars['Upload'];
};


export type StixCoreObjectEditMutationsImportPushArgs = {
  file: Scalars['Upload'];
};


export type StixCoreObjectEditMutationsMergeArgs = {
  stixCoreObjectsIds: Array<InputMaybe<Scalars['String']>>;
};


export type StixCoreObjectEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type StixCoreObjectEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};


export type StixCoreObjectEditMutationsRelationsAddArgs = {
  input?: InputMaybe<StixMetaRelationshipsAddInput>;
};

export type StixCoreObjectOrStixCoreRelationship = Artifact | AttackPattern | AutonomousSystem | Campaign | City | Country | CourseOfAction | Directory | DomainName | EmailAddr | EmailMessage | EmailMimePartType | IPv4Addr | IPv6Addr | Incident | Indicator | Individual | Infrastructure | IntrusionSet | MacAddr | Malware | Mutex | NetworkTraffic | Note | ObservedData | Opinion | Organization | Position | Process | Region | Report | Sector | Software | StixCoreRelationship | StixFile | ThreatActor | Tool | Url | UserAccount | Vulnerability | WindowsRegistryKey | WindowsRegistryValueType | X509Certificate | X509V3ExtensionsType | XOpenCtiCryptocurrencyWallet | XOpenCtiCryptographicKey | XOpenCtiHostname | XOpenCtiText | XOpenCtiUserAgent;

export enum StixCoreObjectsFilter {
  Confidence = 'confidence',
  ContainedBy = 'containedBy',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  HasExternalReference = 'hasExternalReference',
  Indicates = 'indicates',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  ObjectContains = 'objectContains'
}

export type StixCoreObjectsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixCoreObjectsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixCoreObjectsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  IndicatorPattern = 'indicator_pattern',
  Modified = 'modified',
  Name = 'name',
  Published = 'published',
  UpdatedAt = 'updated_at',
  ValidFrom = 'valid_from',
  ValidTo = 'valid_to'
}

export type StixCoreRelationship = BasicRelationship & StixRelationship & {
  __typename?: 'StixCoreRelationship';
  confidence?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  externalReferences?: Maybe<ExternalReferenceConnection>;
  from?: Maybe<StixObjectOrStixRelationship>;
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  relationship_type: Scalars['String'];
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  start_time?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stop_time?: Maybe<Scalars['DateTime']>;
  to?: Maybe<StixObjectOrStixRelationship>;
  toRole?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StixCoreRelationshipExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreRelationshipNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreRelationshipOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreRelationshipReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCoreRelationshipStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixCoreRelationshipAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromId: Scalars['String'];
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relationship_type: Scalars['String'];
  revoked?: InputMaybe<Scalars['Boolean']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
  stix_id?: InputMaybe<Scalars['String']>;
  stop_time?: InputMaybe<Scalars['DateTime']>;
  toId: Scalars['String'];
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixCoreRelationshipConnection = {
  __typename?: 'StixCoreRelationshipConnection';
  edges?: Maybe<Array<Maybe<StixCoreRelationshipEdge>>>;
  pageInfo: PageInfo;
};

export type StixCoreRelationshipEdge = {
  __typename?: 'StixCoreRelationshipEdge';
  cursor: Scalars['String'];
  node: StixCoreRelationship;
};

export type StixCoreRelationshipEditMutations = {
  __typename?: 'StixCoreRelationshipEditMutations';
  contextClean?: Maybe<StixCoreRelationship>;
  contextPatch?: Maybe<StixCoreRelationship>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<StixCoreRelationship>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<StixCoreRelationship>;
};


export type StixCoreRelationshipEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type StixCoreRelationshipEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StixCoreRelationshipEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type StixCoreRelationshipEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum StixCoreRelationshipsFilter {
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  FromId = 'fromId',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Revoked = 'revoked',
  StatusId = 'status_id',
  ToCreatedAt = 'toCreatedAt',
  ToId = 'toId',
  ToMainObservableType = 'toMainObservableType',
  ToName = 'toName',
  ToPatternType = 'toPatternType'
}

export type StixCoreRelationshipsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixCoreRelationshipsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixCoreRelationshipsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  KillChainPhase = 'killChainPhase',
  Modified = 'modified',
  ObjectLabel = 'objectLabel',
  ObjectMarking = 'objectMarking',
  RelationshipType = 'relationship_type',
  StartTime = 'start_time',
  StatusId = 'status_id',
  StopTime = 'stop_time',
  ToName = 'toName',
  ToObservableValue = 'toObservableValue',
  ToPatternType = 'toPatternType',
  ToValidFrom = 'toValidFrom',
  ToValidUntil = 'toValidUntil',
  UpdatedAt = 'updated_at'
}

export type StixCyberObservable = {
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StixCyberObservableConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type StixCyberObservableExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservablePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixCyberObservableStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StixCyberObservableStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixCyberObservableConnection = {
  __typename?: 'StixCyberObservableConnection';
  edges?: Maybe<Array<Maybe<StixCyberObservableEdge>>>;
  pageInfo: PageInfo;
};

export type StixCyberObservableEdge = {
  __typename?: 'StixCyberObservableEdge';
  cursor: Scalars['String'];
  node: StixCyberObservable;
};

export type StixCyberObservableEditMutations = {
  __typename?: 'StixCyberObservableEditMutations';
  contextClean?: Maybe<StixCyberObservable>;
  contextPatch?: Maybe<StixCyberObservable>;
  delete?: Maybe<Scalars['ID']>;
  exportAsk?: Maybe<Array<Maybe<File>>>;
  exportPush?: Maybe<Scalars['Boolean']>;
  fieldPatch?: Maybe<StixCyberObservable>;
  importPush?: Maybe<File>;
  promote?: Maybe<StixCyberObservable>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<StixCyberObservable>;
  relationsAdd?: Maybe<StixCyberObservable>;
};


export type StixCyberObservableEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type StixCyberObservableEditMutationsExportAskArgs = {
  exportType: Scalars['String'];
  format: Scalars['String'];
  maxMarkingDefinition?: InputMaybe<Scalars['String']>;
};


export type StixCyberObservableEditMutationsExportPushArgs = {
  file: Scalars['Upload'];
};


export type StixCyberObservableEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StixCyberObservableEditMutationsImportPushArgs = {
  file: Scalars['Upload'];
};


export type StixCyberObservableEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type StixCyberObservableEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};


export type StixCyberObservableEditMutationsRelationsAddArgs = {
  input?: InputMaybe<StixMetaRelationshipsAddInput>;
};

export type StixCyberObservableRelationship = BasicRelationship & StixRelationship & {
  __typename?: 'StixCyberObservableRelationship';
  created_at: Scalars['DateTime'];
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  from?: Maybe<StixObjectOrStixRelationship>;
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  parent_types: Array<Maybe<Scalars['String']>>;
  relationship_type: Scalars['String'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  start_time?: Maybe<Scalars['DateTime']>;
  stop_time?: Maybe<Scalars['DateTime']>;
  to?: Maybe<StixObjectOrStixRelationship>;
  toRole?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StixCyberObservableRelationshipAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  fromId: Scalars['String'];
  modified?: InputMaybe<Scalars['DateTime']>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  relationship_type: Scalars['String'];
  start_time?: InputMaybe<Scalars['DateTime']>;
  stix_id?: InputMaybe<Scalars['String']>;
  stop_time?: InputMaybe<Scalars['DateTime']>;
  toId: Scalars['String'];
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixCyberObservableRelationshipConnection = {
  __typename?: 'StixCyberObservableRelationshipConnection';
  edges?: Maybe<Array<Maybe<StixCyberObservableRelationshipEdge>>>;
  pageInfo: PageInfo;
};

export type StixCyberObservableRelationshipEdge = {
  __typename?: 'StixCyberObservableRelationshipEdge';
  cursor: Scalars['String'];
  node: StixCyberObservableRelationship;
};

export type StixCyberObservableRelationshipEditMutations = {
  __typename?: 'StixCyberObservableRelationshipEditMutations';
  contextClean?: Maybe<StixCyberObservableRelationship>;
  contextPatch?: Maybe<StixCyberObservableRelationship>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<StixCyberObservableRelationship>;
};


export type StixCyberObservableRelationshipEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type StixCyberObservableRelationshipEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum StixCyberObservableRelationshipsFilter {
  CreatedAt = 'created_at'
}

export type StixCyberObservableRelationshipsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixCyberObservableRelationshipsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixCyberObservableRelationshipsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  Modified = 'modified',
  StartTime = 'start_time',
  StopTime = 'stop_time',
  ToCreatedAt = 'toCreatedAt',
  ToName = 'toName',
  ToPatternType = 'toPatternType',
  ToValidFrom = 'toValidFrom',
  ToValidUntil = 'toValidUntil',
  UpdatedAt = 'updated_at'
}

export enum StixCyberObservablesFilter {
  Confidence = 'confidence',
  ContainedBy = 'containedBy',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  HasExternalReference = 'hasExternalReference',
  HashesMd5 = 'hashes_MD5',
  HashesSha1 = 'hashes_SHA1',
  HashesSha256 = 'hashes_SHA256',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  ObjectContained = 'objectContained',
  RelatedTo = 'relatedTo',
  SightedBy = 'sightedBy',
  UpdatedAt = 'updated_at',
  Value = 'value',
  XOpenctiOrganizationType = 'x_opencti_organization_type',
  XOpenctiScore = 'x_opencti_score'
}

export type StixCyberObservablesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixCyberObservablesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixCyberObservablesOrdering {
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  ObjectMarking = 'objectMarking',
  ObservableValue = 'observable_value',
  UpdatedAt = 'updated_at'
}

export type StixDomainObject = {
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StixDomainObjectConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type StixDomainObjectExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixDomainObjectStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixDomainObjectAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objects?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pattern?: InputMaybe<Scalars['String']>;
  pattern_type?: InputMaybe<Scalars['String']>;
  stix_id?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixDomainObjectConnection = {
  __typename?: 'StixDomainObjectConnection';
  edges?: Maybe<Array<Maybe<StixDomainObjectEdge>>>;
  pageInfo: PageInfo;
};

export type StixDomainObjectEdge = {
  __typename?: 'StixDomainObjectEdge';
  cursor: Scalars['String'];
  node: StixDomainObject;
};

export type StixDomainObjectEditMutations = {
  __typename?: 'StixDomainObjectEditMutations';
  changeType?: Maybe<StixDomainObject>;
  contextClean?: Maybe<StixDomainObject>;
  contextPatch?: Maybe<StixDomainObject>;
  delete?: Maybe<Scalars['ID']>;
  exportAsk?: Maybe<Array<Maybe<File>>>;
  exportPush?: Maybe<Scalars['Boolean']>;
  fieldPatch?: Maybe<StixDomainObject>;
  importPush?: Maybe<File>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<StixDomainObject>;
  relationsAdd?: Maybe<StixDomainObject>;
};


export type StixDomainObjectEditMutationsChangeTypeArgs = {
  newType: Scalars['String'];
};


export type StixDomainObjectEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type StixDomainObjectEditMutationsExportAskArgs = {
  exportType: Scalars['String'];
  format: Scalars['String'];
  maxMarkingDefinition?: InputMaybe<Scalars['String']>;
};


export type StixDomainObjectEditMutationsExportPushArgs = {
  file: Scalars['Upload'];
};


export type StixDomainObjectEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StixDomainObjectEditMutationsImportPushArgs = {
  file: Scalars['Upload'];
};


export type StixDomainObjectEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type StixDomainObjectEditMutationsRelationDeleteArgs = {
  relationship_type?: InputMaybe<Scalars['String']>;
  toId: Scalars['String'];
};


export type StixDomainObjectEditMutationsRelationsAddArgs = {
  input?: InputMaybe<StixMetaRelationshipsAddInput>;
};

export enum StixDomainObjectsFilter {
  Aliases = 'aliases',
  Confidence = 'confidence',
  ContainedBy = 'containedBy',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  HasExternalReference = 'hasExternalReference',
  Indicates = 'indicates',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  ObjectContains = 'objectContains',
  PatternType = 'pattern_type',
  Published = 'published',
  ReportTypes = 'report_types',
  StatusId = 'status_id',
  ValidFrom = 'valid_from',
  ValidUntil = 'valid_until',
  XOpenctiAliases = 'x_opencti_aliases',
  XOpenctiMainObservableType = 'x_opencti_main_observable_type',
  XOpenctiOrganizationType = 'x_opencti_organization_type'
}

export type StixDomainObjectsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixDomainObjectsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixDomainObjectsOrdering {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  IndicatorPattern = 'indicator_pattern',
  Modified = 'modified',
  Name = 'name',
  ObjectMarking = 'objectMarking',
  Published = 'published',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  ValidFrom = 'valid_from',
  ValidUntil = 'valid_until'
}

export type StixEditMutations = {
  __typename?: 'StixEditMutations';
  delete?: Maybe<Scalars['ID']>;
};

export type StixFile = BasicObject & HashedObservable & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'StixFile';
  atime?: Maybe<Scalars['DateTime']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  ctime?: Maybe<Scalars['DateTime']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  extensions?: Maybe<Scalars['String']>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  hashes?: Maybe<Array<Maybe<Hash>>>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  magic_number_hex?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  mtime?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  name_enc?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  size?: Maybe<Scalars['Int']>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_additional_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StixFileConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type StixFileExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFilePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixFileStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StixFileStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixFileAddInput = {
  atime?: InputMaybe<Scalars['DateTime']>;
  ctime?: InputMaybe<Scalars['DateTime']>;
  extensions?: InputMaybe<Scalars['String']>;
  hashes?: InputMaybe<Array<InputMaybe<HashInput>>>;
  magic_number_hex?: InputMaybe<Scalars['String']>;
  mime_type?: InputMaybe<Scalars['String']>;
  mtime?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  name_enc?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  x_opencti_additional_names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixMetaObject = {
  created?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  modified?: Maybe<Scalars['DateTime']>;
  parent_types: Array<Maybe<Scalars['String']>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StixMetaRelationship = BasicRelationship & StixRelationship & {
  __typename?: 'StixMetaRelationship';
  created_at: Scalars['DateTime'];
  entity_type: Scalars['String'];
  from?: Maybe<StixObjectOrStixRelationship>;
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  parent_types: Array<Maybe<Scalars['String']>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  to?: Maybe<StixObjectOrStixRelationship>;
  toRole?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StixMetaRelationshipAddInput = {
  fromId?: InputMaybe<Scalars['ID']>;
  relationship_type: Scalars['String'];
  toId?: InputMaybe<Scalars['ID']>;
};

export type StixMetaRelationshipConnection = {
  __typename?: 'StixMetaRelationshipConnection';
  edges?: Maybe<Array<Maybe<StixMetaRelationshipEdge>>>;
  pageInfo: PageInfo;
};

export type StixMetaRelationshipEdge = {
  __typename?: 'StixMetaRelationshipEdge';
  cursor: Scalars['String'];
  node: StixMetaRelationship;
};

export type StixMetaRelationshipsAddInput = {
  fromIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  relationship_type: Scalars['String'];
  toIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum StixMetaRelationshipsFilter {
  CreatedAt = 'created_at'
}

export type StixMetaRelationshipsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixMetaRelationshipsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixMetaRelationshipsOrdering {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type StixObject = {
  created_at: Scalars['DateTime'];
  entity_type: Scalars['String'];
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  parent_types: Array<Maybe<Scalars['String']>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  updated_at: Scalars['DateTime'];
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StixObjectOrStixRelationship = Artifact | AttackPattern | AutonomousSystem | Campaign | City | Country | CourseOfAction | Directory | DomainName | EmailAddr | EmailMessage | EmailMimePartType | ExternalReference | IPv4Addr | IPv6Addr | Incident | Indicator | Individual | Infrastructure | IntrusionSet | KillChainPhase | Label | MacAddr | Malware | MarkingDefinition | Mutex | NetworkTraffic | Note | ObservedData | Opinion | Organization | Position | Process | Region | Report | Sector | Software | StixCoreRelationship | StixCyberObservableRelationship | StixFile | StixMetaRelationship | StixSightingRelationship | System | ThreatActor | Tool | Url | UserAccount | Vulnerability | WindowsRegistryKey | WindowsRegistryValueType | X509Certificate | X509V3ExtensionsType | XOpenCtiCryptocurrencyWallet | XOpenCtiCryptographicKey | XOpenCtiHostname | XOpenCtiText | XOpenCtiUserAgent;

export type StixObjectOrStixRelationshipConnection = {
  __typename?: 'StixObjectOrStixRelationshipConnection';
  edges?: Maybe<Array<Maybe<StixObjectOrStixRelationshipEdge>>>;
  pageInfo: PageInfo;
};

export type StixObjectOrStixRelationshipEdge = {
  __typename?: 'StixObjectOrStixRelationshipEdge';
  cursor: Scalars['String'];
  node: StixObjectOrStixRelationship;
};

export enum StixObjectOrStixRelationshipsFilter {
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  UpdatedAt = 'updated_at'
}

export type StixObjectOrStixRelationshipsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixObjectOrStixRelationshipsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum StixObjectOrStixRelationshipsOrdering {
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  Name = 'name',
  ObjectLabel = 'objectLabel',
  ObjectMarking = 'objectMarking',
  ObservableValue = 'observable_value',
  UpdatedAt = 'updated_at'
}

export type StixRelationship = {
  entity_type: Scalars['String'];
  from?: Maybe<StixObjectOrStixRelationship>;
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  parent_types: Array<Maybe<Scalars['String']>>;
  standard_id: Scalars['String'];
  to?: Maybe<StixObjectOrStixRelationship>;
  toRole?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StixRelationshipConnection = {
  __typename?: 'StixRelationshipConnection';
  edges?: Maybe<Array<Maybe<StixRelationshipEdge>>>;
  pageInfo: PageInfo;
};

export type StixRelationshipEdge = {
  __typename?: 'StixRelationshipEdge';
  cursor: Scalars['String'];
  node: StixRelationship;
};

export enum StixRelationshipsFilter {
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  ToCreatedAt = 'toCreatedAt',
  ToMainObservableType = 'toMainObservableType',
  ToName = 'toName',
  ToPatternType = 'toPatternType'
}

export type StixRelationshipsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixRelationshipsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixRelationshipsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  KillChainPhase = 'killChainPhase',
  Modified = 'modified',
  ObjectLabel = 'objectLabel',
  ObjectMarking = 'objectMarking',
  RelationshipType = 'relationship_type',
  StartTime = 'start_time',
  StopTime = 'stop_time',
  ToName = 'toName',
  ToPatternType = 'toPatternType',
  ToValidFrom = 'toValidFrom',
  ToValidUntil = 'toValidUntil',
  UpdatedAt = 'updated_at'
}

export type StixSightingRelationship = BasicRelationship & StixRelationship & {
  __typename?: 'StixSightingRelationship';
  attribute_count: Scalars['Int'];
  confidence?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  from?: Maybe<StixObjectOrStixRelationship>;
  fromRole?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_inferred: Scalars['Boolean'];
  last_seen?: Maybe<Scalars['DateTime']>;
  modified?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  to?: Maybe<StixObjectOrStixRelationship>;
  toRole?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_negative: Scalars['Boolean'];
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StixSightingRelationshipExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixSightingRelationshipNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixSightingRelationshipOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type StixSightingRelationshipReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type StixSightingRelationshipAddInput = {
  attribute_count: Scalars['Int'];
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  fromId: Scalars['String'];
  last_seen?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  toId?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_negative?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StixSightingRelationshipConnection = {
  __typename?: 'StixSightingRelationshipConnection';
  edges?: Maybe<Array<Maybe<StixSightingRelationshipsEdge>>>;
  pageInfo: PageInfo;
};

export type StixSightingRelationshipEditMutations = {
  __typename?: 'StixSightingRelationshipEditMutations';
  contextClean?: Maybe<StixSightingRelationship>;
  contextPatch?: Maybe<StixSightingRelationship>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<StixSightingRelationship>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<StixSightingRelationship>;
};


export type StixSightingRelationshipEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type StixSightingRelationshipEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StixSightingRelationshipEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type StixSightingRelationshipEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export type StixSightingRelationshipsEdge = {
  __typename?: 'StixSightingRelationshipsEdge';
  cursor: Scalars['String'];
  node: StixSightingRelationship;
};

export enum StixSightingRelationshipsFilter {
  AttributeCount = 'attribute_count',
  Confidence = 'confidence',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  FromId = 'fromId',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  StatusId = 'status_id',
  ToId = 'toId',
  ToMainObservableType = 'toMainObservableType',
  ToPatternType = 'toPatternType',
  XOpenctiNegative = 'x_opencti_negative'
}

export type StixSightingRelationshipsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: StixSightingRelationshipsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StixSightingRelationshipsOrdering {
  AttributeCount = 'attribute_count',
  Confidence = 'confidence',
  Created = 'created',
  CreatedAt = 'created_at',
  FirstSeen = 'first_seen',
  LastSeen = 'last_seen',
  Modified = 'modified',
  ObjectLabel = 'objectLabel',
  ObjectMarking = 'objectMarking',
  StatusId = 'status_id',
  ToCreatedAt = 'toCreatedAt',
  ToName = 'toName',
  ToPatternType = 'toPatternType',
  ToValidFrom = 'toValidFrom',
  ToValidUntil = 'toValidUntil',
  UpdatedAt = 'updated_at',
  XOpenctiNegative = 'x_opencti_negative'
}

export type StreamCollection = {
  __typename?: 'StreamCollection';
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Group>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type StreamCollectionAddInput = {
  description?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type StreamCollectionConnection = {
  __typename?: 'StreamCollectionConnection';
  edges?: Maybe<Array<Maybe<StreamCollectionEdge>>>;
  pageInfo: PageInfo;
};

export type StreamCollectionEdge = {
  __typename?: 'StreamCollectionEdge';
  cursor: Scalars['String'];
  node: StreamCollection;
};

export type StreamCollectionEditMutations = {
  __typename?: 'StreamCollectionEditMutations';
  addGroup?: Maybe<StreamCollection>;
  delete?: Maybe<Scalars['ID']>;
  deleteGroup?: Maybe<StreamCollection>;
  fieldPatch?: Maybe<StreamCollection>;
};


export type StreamCollectionEditMutationsAddGroupArgs = {
  id: Scalars['ID'];
};


export type StreamCollectionEditMutationsDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type StreamCollectionEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum StreamCollectionOrdering {
  Description = 'description',
  Name = 'name'
}

export type SubType = {
  __typename?: 'SubType';
  id: Scalars['ID'];
  label: Scalars['String'];
  statuses?: Maybe<StatusConnection>;
  workflowEnabled?: Maybe<Scalars['Boolean']>;
};

export type SubTypeConnection = {
  __typename?: 'SubTypeConnection';
  edges?: Maybe<Array<Maybe<SubTypeEdge>>>;
  pageInfo: PageInfo;
};

export type SubTypeEdge = {
  __typename?: 'SubTypeEdge';
  cursor: Scalars['String'];
  node: SubType;
};

export type SubTypeEditMutations = {
  __typename?: 'SubTypeEditMutations';
  statusAdd?: Maybe<SubType>;
  statusDelete?: Maybe<SubType>;
  statusFieldPatch?: Maybe<SubType>;
};


export type SubTypeEditMutationsStatusAddArgs = {
  input?: InputMaybe<StatusAddInput>;
};


export type SubTypeEditMutationsStatusDeleteArgs = {
  statusId: Scalars['String'];
};


export type SubTypeEditMutationsStatusFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
  statusId: Scalars['String'];
};

export enum SubTypesOrdering {
  Label = 'label'
}

export type Subscription = {
  __typename?: 'Subscription';
  externalReference?: Maybe<ExternalReference>;
  group?: Maybe<Group>;
  killChainPhase?: Maybe<KillChainPhase>;
  label?: Maybe<Label>;
  markingDefinition?: Maybe<MarkingDefinition>;
  settings?: Maybe<Settings>;
  stixCoreObject?: Maybe<StixCoreObject>;
  stixCoreRelationship?: Maybe<StixCoreRelationship>;
  stixCyberObservable?: Maybe<StixCyberObservable>;
  stixCyberObservableRelationship?: Maybe<StixCyberObservableRelationship>;
  stixDomainObject?: Maybe<StixDomainObject>;
  stixSightingRelationship?: Maybe<StixSightingRelationship>;
  user?: Maybe<User>;
  workspace?: Maybe<Workspace>;
};


export type SubscriptionExternalReferenceArgs = {
  id: Scalars['ID'];
};


export type SubscriptionGroupArgs = {
  id: Scalars['ID'];
};


export type SubscriptionKillChainPhaseArgs = {
  id: Scalars['ID'];
};


export type SubscriptionLabelArgs = {
  id: Scalars['ID'];
};


export type SubscriptionMarkingDefinitionArgs = {
  id: Scalars['ID'];
};


export type SubscriptionSettingsArgs = {
  id: Scalars['ID'];
};


export type SubscriptionStixCoreObjectArgs = {
  id: Scalars['ID'];
};


export type SubscriptionStixCoreRelationshipArgs = {
  id: Scalars['ID'];
};


export type SubscriptionStixCyberObservableArgs = {
  id: Scalars['ID'];
};


export type SubscriptionStixCyberObservableRelationshipArgs = {
  id: Scalars['ID'];
};


export type SubscriptionStixDomainObjectArgs = {
  id: Scalars['ID'];
};


export type SubscriptionStixSightingRelationshipArgs = {
  id: Scalars['ID'];
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
};


export type SubscriptionWorkspaceArgs = {
  id: Scalars['ID'];
};

export type Synchronizer = {
  __typename?: 'Synchronizer';
  current_state?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  listen_deletion: Scalars['Boolean'];
  name: Scalars['String'];
  running: Scalars['Boolean'];
  ssl_verify?: Maybe<Scalars['Boolean']>;
  stream_id: Scalars['String'];
  token: Scalars['String'];
  uri: Scalars['String'];
  user?: Maybe<User>;
};

export type SynchronizerAddInput = {
  current_state?: InputMaybe<Scalars['String']>;
  listen_deletion: Scalars['Boolean'];
  name: Scalars['String'];
  ssl_verify?: InputMaybe<Scalars['Boolean']>;
  stream_id: Scalars['String'];
  token: Scalars['String'];
  uri: Scalars['String'];
  user_id?: InputMaybe<Scalars['String']>;
};

export type SynchronizerConnection = {
  __typename?: 'SynchronizerConnection';
  edges?: Maybe<Array<Maybe<SynchronizerEdge>>>;
  pageInfo: PageInfo;
};

export type SynchronizerEdge = {
  __typename?: 'SynchronizerEdge';
  cursor: Scalars['String'];
  node: Synchronizer;
};

export type SynchronizerEditMutations = {
  __typename?: 'SynchronizerEditMutations';
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Synchronizer>;
};


export type SynchronizerEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum SynchronizersOrdering {
  CurrentState = 'current_state',
  Id = 'id',
  Name = 'name',
  Running = 'running',
  StreamId = 'stream_id',
  Uri = 'uri'
}

export type System = BasicObject & Identity & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'System';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  contact_information?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  identity_class: Scalars['String'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  organizations?: Maybe<OrganizationConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  x_opencti_firstname?: Maybe<Scalars['String']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_lastname?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SystemConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type SystemExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type SystemStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SystemAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  contact_information?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  x_opencti_firstname?: InputMaybe<Scalars['String']>;
  x_opencti_lastname?: InputMaybe<Scalars['String']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  pageInfo: PageInfo;
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor: Scalars['String'];
  node: System;
};

export type SystemEditMutations = {
  __typename?: 'SystemEditMutations';
  contextClean?: Maybe<System>;
  contextPatch?: Maybe<System>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<System>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<System>;
};


export type SystemEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type SystemEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SystemEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type SystemEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum SystemsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  Revoked = 'revoked',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type SystemsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: SystemsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum SystemsOrdering {
  Confidence = 'confidence',
  Created = 'created',
  Firstname = 'firstname',
  Lastname = 'lastname',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id'
}

export type Task = {
  actions?: Maybe<Array<Maybe<TaskAction>>>;
  completed?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  errors?: Maybe<Array<Maybe<TaskError>>>;
  id: Scalars['ID'];
  initiator?: Maybe<User>;
  last_execution_date?: Maybe<Scalars['DateTime']>;
  task_expected_number?: Maybe<Scalars['Int']>;
  task_processed_number?: Maybe<Scalars['Int']>;
  type?: Maybe<TaskType>;
};

export type TaskAction = {
  __typename?: 'TaskAction';
  context?: Maybe<TaskContext>;
  type?: Maybe<TaskActionType>;
};

export type TaskActionInput = {
  context?: InputMaybe<TaskContextInput>;
  type: TaskActionType;
};

export enum TaskActionType {
  Add = 'ADD',
  Delete = 'DELETE',
  Merge = 'MERGE',
  Remove = 'REMOVE',
  Replace = 'REPLACE',
  Rescan = 'RESCAN'
}

export type TaskConnection = {
  __typename?: 'TaskConnection';
  edges?: Maybe<Array<Maybe<TaskConnectionEdge>>>;
  pageInfo: PageInfo;
};

export type TaskConnectionEdge = {
  __typename?: 'TaskConnectionEdge';
  cursor: Scalars['String'];
  node: Task;
};

export type TaskContext = {
  __typename?: 'TaskContext';
  field?: Maybe<Scalars['String']>;
  type?: Maybe<TaskContextType>;
  values: Array<Maybe<Scalars['String']>>;
};

export type TaskContextInput = {
  field?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TaskContextType>;
  values: Array<InputMaybe<Scalars['String']>>;
};

export enum TaskContextType {
  Attribute = 'ATTRIBUTE',
  Relation = 'RELATION'
}

export type TaskError = {
  __typename?: 'TaskError';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export enum TaskType {
  List = 'LIST',
  Query = 'QUERY',
  Rule = 'RULE'
}

export enum TasksFilter {
  Completed = 'completed',
  Initiator = 'initiator',
  Type = 'type'
}

export type TasksFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: TasksFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum TasksOrdering {
  Completed = 'completed',
  CreatedAt = 'created_at',
  Id = 'id',
  LastExecutionDate = 'last_execution_date',
  Type = 'type'
}

export type TaxiiCollection = {
  __typename?: 'TaxiiCollection';
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type TaxiiCollectionAddInput = {
  description?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TaxiiCollectionConnection = {
  __typename?: 'TaxiiCollectionConnection';
  edges?: Maybe<Array<Maybe<TaxiiCollectionEdge>>>;
  pageInfo: PageInfo;
};

export type TaxiiCollectionEdge = {
  __typename?: 'TaxiiCollectionEdge';
  cursor: Scalars['String'];
  node: TaxiiCollection;
};

export type TaxiiCollectionEditMutations = {
  __typename?: 'TaxiiCollectionEditMutations';
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<TaxiiCollection>;
};


export type TaxiiCollectionEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum TaxiiCollectionOrdering {
  Description = 'description',
  Name = 'name'
}

export type ThreatActor = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'ThreatActor';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  first_seen?: Maybe<Scalars['DateTime']>;
  goals?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['DateTime']>;
  locations?: Maybe<LocationConnection>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  personal_motivations?: Maybe<Array<Maybe<Scalars['String']>>>;
  primary_motivation?: Maybe<Scalars['String']>;
  reports?: Maybe<ReportConnection>;
  resource_level?: Maybe<Scalars['String']>;
  revoked: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  secondary_motivations?: Maybe<Array<Maybe<Scalars['String']>>>;
  sophistication?: Maybe<Scalars['String']>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  threat_actor_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ThreatActorConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ThreatActorExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ThreatActorStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ThreatActorAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first_seen?: InputMaybe<Scalars['DateTime']>;
  goals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['DateTime']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  personal_motivations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  primary_motivation?: InputMaybe<Scalars['String']>;
  resource_level?: InputMaybe<Scalars['String']>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  secondary_motivations?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sophistication?: InputMaybe<Scalars['String']>;
  stix_id?: InputMaybe<Scalars['String']>;
  threat_actor_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ThreatActorConnection = {
  __typename?: 'ThreatActorConnection';
  edges?: Maybe<Array<Maybe<ThreatActorEdge>>>;
  pageInfo: PageInfo;
};

export type ThreatActorEdge = {
  __typename?: 'ThreatActorEdge';
  cursor: Scalars['String'];
  node: ThreatActor;
};

export type ThreatActorEditMutations = {
  __typename?: 'ThreatActorEditMutations';
  contextClean?: Maybe<ThreatActor>;
  contextPatch?: Maybe<ThreatActor>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<ThreatActor>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<ThreatActor>;
};


export type ThreatActorEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type ThreatActorEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ThreatActorEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type ThreatActorEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum ThreatActorsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type ThreatActorsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: ThreatActorsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ThreatActorsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type TimeSeries = {
  __typename?: 'TimeSeries';
  date: Scalars['DateTime'];
  value: Scalars['Int'];
};

export type Tool = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Tool';
  aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  killChainPhases?: Maybe<KillChainPhaseConnection>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  tool_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  tool_version?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ToolConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type ToolExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type ToolStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ToolAddInput = {
  aliases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  killChainPhases?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  tool_types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tool_version?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ToolConnection = {
  __typename?: 'ToolConnection';
  edges?: Maybe<Array<Maybe<ToolEdge>>>;
  pageInfo: PageInfo;
};

export type ToolEdge = {
  __typename?: 'ToolEdge';
  cursor: Scalars['String'];
  node: Tool;
};

export type ToolEditMutations = {
  __typename?: 'ToolEditMutations';
  contextClean?: Maybe<Tool>;
  contextPatch?: Maybe<Tool>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Tool>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Tool>;
};


export type ToolEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type ToolEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ToolEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type ToolEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export enum ToolsFilter {
  Aliases = 'aliases',
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id'
}

export type ToolsFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: ToolsFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ToolsOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at'
}

export type Url = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'Url';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UrlConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type UrlExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UrlStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UrlStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UrlAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type User = BasicObject & InternalObject & {
  __typename?: 'User';
  allowed_marking?: Maybe<Array<Maybe<MarkingDefinition>>>;
  api_token: Scalars['String'];
  capabilities: Array<Maybe<Capability>>;
  created_at: Scalars['DateTime'];
  dashboard?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  external?: Maybe<Scalars['Boolean']>;
  firstname?: Maybe<Scalars['String']>;
  groups?: Maybe<GroupConnection>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent_types: Array<Maybe<Scalars['String']>>;
  roles: Array<Maybe<Role>>;
  sessions?: Maybe<Array<Maybe<SessionDetail>>>;
  standard_id: Scalars['String'];
  theme?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  userSubscriptions?: Maybe<UserSubscriptionConnection>;
  user_email: Scalars['String'];
};


export type UserUserSubscriptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type UserAccount = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'UserAccount';
  account_created?: Maybe<Scalars['DateTime']>;
  account_expires?: Maybe<Scalars['DateTime']>;
  account_first_login?: Maybe<Scalars['DateTime']>;
  account_last_login?: Maybe<Scalars['DateTime']>;
  account_login?: Maybe<Scalars['String']>;
  account_type?: Maybe<Scalars['String']>;
  can_escalate_privs?: Maybe<Scalars['Boolean']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  credential?: Maybe<Scalars['String']>;
  credential_last_changed?: Maybe<Scalars['DateTime']>;
  display_name?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  extensions?: Maybe<Scalars['String']>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  is_inferred: Scalars['Boolean'];
  is_privileged?: Maybe<Scalars['Boolean']>;
  is_service_account?: Maybe<Scalars['Boolean']>;
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  user_id?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserAccountConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type UserAccountExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAccountStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UserAccountStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserAccountAddInput = {
  account_created?: InputMaybe<Scalars['DateTime']>;
  account_expires?: InputMaybe<Scalars['DateTime']>;
  account_first_login?: InputMaybe<Scalars['DateTime']>;
  account_last_login?: InputMaybe<Scalars['DateTime']>;
  account_login?: InputMaybe<Scalars['String']>;
  account_type?: InputMaybe<Scalars['String']>;
  can_escalate_privs?: InputMaybe<Scalars['Boolean']>;
  credential?: InputMaybe<Scalars['String']>;
  credential_last_changed?: InputMaybe<Scalars['DateTime']>;
  display_name?: InputMaybe<Scalars['String']>;
  extensions?: InputMaybe<Scalars['String']>;
  is_disabled?: InputMaybe<Scalars['Boolean']>;
  is_privileged?: InputMaybe<Scalars['Boolean']>;
  is_service_account?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type UserAddInput = {
  description?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  theme?: InputMaybe<Scalars['String']>;
  user_email?: InputMaybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserEditMutations = {
  __typename?: 'UserEditMutations';
  contextClean?: Maybe<User>;
  contextPatch?: Maybe<User>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<User>;
  relationAdd?: Maybe<InternalRelationship>;
  relationDelete?: Maybe<User>;
  tokenRenew?: Maybe<User>;
};


export type UserEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type UserEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type UserEditMutationsRelationAddArgs = {
  input?: InputMaybe<InternalRelationshipAddInput>;
};


export type UserEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserSession = {
  __typename?: 'UserSession';
  sessions?: Maybe<Array<Maybe<SessionDetail>>>;
  user?: Maybe<User>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  cron?: Maybe<Scalars['String']>;
  entities?: Maybe<Array<Maybe<StixDomainObject>>>;
  entities_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  filters?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_run: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['String']>;
};

export type UserSubscriptionAddInput = {
  cron?: InputMaybe<Scalars['String']>;
  entities_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserSubscriptionConnection = {
  __typename?: 'UserSubscriptionConnection';
  edges?: Maybe<Array<Maybe<UserSubscriptionEdge>>>;
  pageInfo: PageInfo;
};

export type UserSubscriptionEdge = {
  __typename?: 'UserSubscriptionEdge';
  cursor: Scalars['String'];
  node: UserSubscription;
};

export type UserSubscriptionEditMutations = {
  __typename?: 'UserSubscriptionEditMutations';
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<UserSubscription>;
};


export type UserSubscriptionEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};

export enum UserSubscriptionOrdering {
  CreatedAt = 'created_at'
}

export enum UsersFilter {
  CreatedAt = 'created_at',
  EntityType = 'entity_type',
  Name = 'name'
}

export type UsersFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: UsersFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum UsersOrdering {
  CreatedAt = 'created_at',
  External = 'external',
  Firstname = 'firstname',
  Language = 'language',
  Lastname = 'lastname',
  Name = 'name',
  UpdatedAt = 'updated_at',
  UserEmail = 'user_email'
}

export enum VulnerabilitiesFilter {
  Created = 'created',
  CreatedBy = 'createdBy',
  CreatedAt = 'created_at',
  LabelledBy = 'labelledBy',
  MarkedBy = 'markedBy',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  XOpenctiAttackVector = 'x_opencti_attack_vector',
  XOpenctiBaseScore = 'x_opencti_base_score',
  XOpenctiBaseSeverity = 'x_opencti_base_severity'
}

export type VulnerabilitiesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: VulnerabilitiesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum VulnerabilitiesOrdering {
  Created = 'created',
  CreatedAt = 'created_at',
  Modified = 'modified',
  Name = 'name',
  StatusId = 'status_id',
  UpdatedAt = 'updated_at',
  XOpenctiAttackVector = 'x_opencti_attack_vector',
  XOpenctiBaseScore = 'x_opencti_base_score',
  XOpenctiBaseSeverity = 'x_opencti_base_severity'
}

export type Vulnerability = BasicObject & StixCoreObject & StixDomainObject & StixObject & {
  __typename?: 'Vulnerability';
  confidence?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  lang?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  revoked: Scalars['Boolean'];
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  status?: Maybe<Status>;
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  workflowEnabled?: Maybe<Scalars['Boolean']>;
  x_opencti_attack_vector?: Maybe<Scalars['String']>;
  x_opencti_availability_impact?: Maybe<Scalars['String']>;
  x_opencti_base_score?: Maybe<Scalars['Float']>;
  x_opencti_base_severity?: Maybe<Scalars['String']>;
  x_opencti_confidentiality_impact?: Maybe<Scalars['String']>;
  x_opencti_graph_data?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_integrity_impact?: Maybe<Scalars['String']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VulnerabilityConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type VulnerabilityExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type VulnerabilityStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VulnerabilityAddInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  confidence?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  externalReferences?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  objectLabel?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  objectMarking?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  revoked?: InputMaybe<Scalars['Boolean']>;
  stix_id?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
  x_opencti_attack_vector?: InputMaybe<Scalars['String']>;
  x_opencti_availability_impact?: InputMaybe<Scalars['String']>;
  x_opencti_base_score?: InputMaybe<Scalars['Float']>;
  x_opencti_base_severity?: InputMaybe<Scalars['String']>;
  x_opencti_confidentiality_impact?: InputMaybe<Scalars['String']>;
  x_opencti_integrity_impact?: InputMaybe<Scalars['String']>;
  x_opencti_stix_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VulnerabilityConnection = {
  __typename?: 'VulnerabilityConnection';
  edges?: Maybe<Array<Maybe<VulnerabilityEdge>>>;
  pageInfo: PageInfo;
};

export type VulnerabilityEdge = {
  __typename?: 'VulnerabilityEdge';
  cursor: Scalars['String'];
  node: Vulnerability;
};

export type VulnerabilityEditMutations = {
  __typename?: 'VulnerabilityEditMutations';
  contextClean?: Maybe<Vulnerability>;
  contextPatch?: Maybe<Vulnerability>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Vulnerability>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Vulnerability>;
};


export type VulnerabilityEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type VulnerabilityEditMutationsFieldPatchArgs = {
  commitMessage?: InputMaybe<Scalars['String']>;
  input: Array<InputMaybe<EditInput>>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VulnerabilityEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type VulnerabilityEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};

export type WindowsRegistryKey = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'WindowsRegistryKey';
  attribute_key?: Maybe<Scalars['String']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  modified_time?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<NoteConnection>;
  number_of_subkeys?: Maybe<Scalars['Int']>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type WindowsRegistryKeyConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type WindowsRegistryKeyExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryKeyStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WindowsRegistryKeyStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WindowsRegistryKeyAddInput = {
  attribute_key?: InputMaybe<Scalars['String']>;
  modified_time?: InputMaybe<Scalars['DateTime']>;
  number_of_subkeys?: InputMaybe<Scalars['Int']>;
};

export type WindowsRegistryValueType = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'WindowsRegistryValueType';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  data?: Maybe<Scalars['String']>;
  data_type?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type WindowsRegistryValueTypeConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type WindowsRegistryValueTypeExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type WindowsRegistryValueTypeStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WindowsRegistryValueTypeStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WindowsRegistryValueTypeAddInput = {
  data?: InputMaybe<Scalars['String']>;
  data_type?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Work = {
  __typename?: 'Work';
  completed_number?: Maybe<Scalars['Int']>;
  completed_time?: Maybe<Scalars['DateTime']>;
  connector?: Maybe<Connector>;
  errors?: Maybe<Array<Maybe<WorkMessage>>>;
  event_source_id?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<WorkMessage>>>;
  name?: Maybe<Scalars['String']>;
  processed_time?: Maybe<Scalars['DateTime']>;
  received_time?: Maybe<Scalars['DateTime']>;
  status: State;
  timestamp: Scalars['DateTime'];
  tracking?: Maybe<WorkTracking>;
  user?: Maybe<User>;
};

export type WorkConnection = {
  __typename?: 'WorkConnection';
  edges?: Maybe<Array<Maybe<WorkEdge>>>;
  pageInfo: PageInfo;
};

export type WorkEdge = {
  __typename?: 'WorkEdge';
  cursor: Scalars['String'];
  node: Work;
};

export type WorkEditMutations = {
  __typename?: 'WorkEditMutations';
  addExpectations: Scalars['ID'];
  delete: Scalars['ID'];
  ping: Scalars['ID'];
  reportExpectation: Scalars['ID'];
  toProcessed: Scalars['ID'];
  toReceived: Scalars['ID'];
};


export type WorkEditMutationsAddExpectationsArgs = {
  expectations?: InputMaybe<Scalars['Int']>;
};


export type WorkEditMutationsReportExpectationArgs = {
  error?: InputMaybe<WorkErrorInput>;
};


export type WorkEditMutationsToProcessedArgs = {
  inError?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
};


export type WorkEditMutationsToReceivedArgs = {
  message?: InputMaybe<Scalars['String']>;
};

export type WorkErrorInput = {
  error?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type WorkMessage = {
  __typename?: 'WorkMessage';
  message?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type WorkTracking = {
  __typename?: 'WorkTracking';
  import_expected_number?: Maybe<Scalars['Int']>;
  import_last_processed?: Maybe<Scalars['DateTime']>;
  import_processed_number?: Maybe<Scalars['Int']>;
};

export enum WorksFilter {
  CompletedNumber = 'completed_number',
  CompletedTime = 'completed_time',
  ConnectorId = 'connector_id',
  Status = 'status'
}

export type WorksFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: WorksFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum WorksOrdering {
  Status = 'status',
  Timestamp = 'timestamp'
}

export type Workspace = {
  __typename?: 'Workspace';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  graph_data?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  manifest?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  objects?: Maybe<StixObjectOrStixRelationshipConnection>;
  owner?: Maybe<User>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type WorkspaceObjectsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  all?: InputMaybe<Scalars['Boolean']>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixObjectOrStixRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StixObjectOrStixRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WorkspaceAddInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type: Scalars['String'];
};

export type WorkspaceConnection = {
  __typename?: 'WorkspaceConnection';
  edges?: Maybe<Array<Maybe<WorkspaceEdge>>>;
  pageInfo: PageInfo;
};

export type WorkspaceEdge = {
  __typename?: 'WorkspaceEdge';
  cursor: Scalars['String'];
  node: Workspace;
};

export type WorkspaceEditMutations = {
  __typename?: 'WorkspaceEditMutations';
  contextClean?: Maybe<Workspace>;
  contextPatch?: Maybe<Workspace>;
  delete?: Maybe<Scalars['ID']>;
  fieldPatch?: Maybe<Workspace>;
  relationAdd?: Maybe<StixMetaRelationship>;
  relationDelete?: Maybe<Workspace>;
  relationsAdd?: Maybe<Workspace>;
  relationsDelete?: Maybe<Workspace>;
};


export type WorkspaceEditMutationsContextPatchArgs = {
  input?: InputMaybe<EditContext>;
};


export type WorkspaceEditMutationsFieldPatchArgs = {
  input: Array<InputMaybe<EditInput>>;
};


export type WorkspaceEditMutationsRelationAddArgs = {
  input?: InputMaybe<StixMetaRelationshipAddInput>;
};


export type WorkspaceEditMutationsRelationDeleteArgs = {
  relationship_type: Scalars['String'];
  toId: Scalars['String'];
};


export type WorkspaceEditMutationsRelationsAddArgs = {
  input?: InputMaybe<StixMetaRelationshipsAddInput>;
};


export type WorkspaceEditMutationsRelationsDeleteArgs = {
  relationship_type: Scalars['String'];
  toIds: Array<InputMaybe<Scalars['String']>>;
};

export enum WorkspacesFilter {
  Name = 'name',
  Owner = 'owner',
  Tag = 'tag',
  Type = 'type'
}

export type WorkspacesFiltering = {
  filterMode?: InputMaybe<FilterMode>;
  key: WorkspacesFilter;
  operator?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum WorkspacesOrdering {
  CreatedAt = 'created_at',
  Name = 'name',
  OwnedBy = 'ownedBy'
}

export type X509Certificate = BasicObject & HashedObservable & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'X509Certificate';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  hashes?: Maybe<Array<Maybe<Hash>>>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  is_self_signed?: Maybe<Scalars['Boolean']>;
  issuer?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  serial_number?: Maybe<Scalars['String']>;
  signature_algorithm?: Maybe<Scalars['String']>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  subject?: Maybe<Scalars['String']>;
  subject_public_key_algorithm?: Maybe<Scalars['String']>;
  subject_public_key_exponent?: Maybe<Scalars['Int']>;
  subject_public_key_modulus?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  validity_not_after?: Maybe<Scalars['DateTime']>;
  validity_not_before?: Maybe<Scalars['DateTime']>;
  version?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type X509CertificateConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type X509CertificateExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificatePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509CertificateStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type X509CertificateStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type X509CertificateAddInput = {
  hashes?: InputMaybe<Array<InputMaybe<HashInput>>>;
  is_self_signed?: InputMaybe<Scalars['Boolean']>;
  issuer?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['String']>;
  signature_algorithm?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  subject_public_key_algorithm?: InputMaybe<Scalars['String']>;
  subject_public_key_exponent?: InputMaybe<Scalars['Int']>;
  subject_public_key_modulus?: InputMaybe<Scalars['String']>;
  validity_not_after?: InputMaybe<Scalars['DateTime']>;
  validity_not_before?: InputMaybe<Scalars['DateTime']>;
  version?: InputMaybe<Scalars['String']>;
};

export type X509V3ExtensionsType = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'X509V3ExtensionsType';
  authority_key_identifier?: Maybe<Scalars['String']>;
  basic_constraints?: Maybe<Scalars['String']>;
  certificate_policies?: Maybe<Scalars['String']>;
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  crl_distribution_points?: Maybe<Scalars['String']>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  extended_key_usage?: Maybe<Scalars['String']>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  inhibit_any_policy?: Maybe<Scalars['String']>;
  is_inferred: Scalars['Boolean'];
  issuer_alternative_name?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Maybe<Work>>>;
  key_usage?: Maybe<Scalars['String']>;
  name_constraints?: Maybe<Scalars['String']>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  policy_constraints?: Maybe<Scalars['String']>;
  policy_mappings?: Maybe<Scalars['String']>;
  private_key_usage_period_not_after?: Maybe<Scalars['DateTime']>;
  private_key_usage_period_not_before?: Maybe<Scalars['DateTime']>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  subject_alternative_name?: Maybe<Scalars['String']>;
  subject_directory_attributes?: Maybe<Scalars['String']>;
  subject_key_identifier?: Maybe<Scalars['String']>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type X509V3ExtensionsTypeConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type X509V3ExtensionsTypeExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type X509V3ExtensionsTypeStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type X509V3ExtensionsTypeStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type X509V3ExtensionsTypeAddInput = {
  authority_key_identifier?: InputMaybe<Scalars['String']>;
  basic_constraints?: InputMaybe<Scalars['String']>;
  certificate_policies?: InputMaybe<Scalars['String']>;
  crl_distribution_points?: InputMaybe<Scalars['String']>;
  extended_key_usage?: InputMaybe<Scalars['String']>;
  inhibit_any_policy?: InputMaybe<Scalars['String']>;
  issuer_alternative_name?: InputMaybe<Scalars['String']>;
  key_usage?: InputMaybe<Scalars['String']>;
  name_constraints?: InputMaybe<Scalars['String']>;
  policy_constraints?: InputMaybe<Scalars['String']>;
  policy_mappings?: InputMaybe<Scalars['String']>;
  private_key_usage_period_not_after?: InputMaybe<Scalars['DateTime']>;
  private_key_usage_period_not_before?: InputMaybe<Scalars['DateTime']>;
  subject_alternative_name?: InputMaybe<Scalars['String']>;
  subject_directory_attributes?: InputMaybe<Scalars['String']>;
  subject_key_identifier?: InputMaybe<Scalars['String']>;
};

export type XOpenCtiCryptocurrencyWallet = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'XOpenCTICryptocurrencyWallet';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type XOpenCtiCryptocurrencyWalletConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type XOpenCtiCryptocurrencyWalletExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptocurrencyWalletStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type XOpenCtiCryptocurrencyWalletStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type XOpenCtiCryptocurrencyWalletAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type XOpenCtiCryptographicKey = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'XOpenCTICryptographicKey';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type XOpenCtiCryptographicKeyConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type XOpenCtiCryptographicKeyExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiCryptographicKeyStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type XOpenCtiCryptographicKeyStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type XOpenCtiCryptographicKeyAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type XOpenCtiHostname = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'XOpenCTIHostname';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type XOpenCtiHostnameConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type XOpenCtiHostnameExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnamePendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiHostnameStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type XOpenCtiHostnameStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type XOpenCtiHostnameAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type XOpenCtiText = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'XOpenCTIText';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type XOpenCtiTextConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type XOpenCtiTextExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiTextStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type XOpenCtiTextStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type XOpenCtiTextAddInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type XOpenCtiUserAgent = BasicObject & StixCoreObject & StixCyberObservable & StixObject & {
  __typename?: 'XOpenCTIUserAgent';
  connectors?: Maybe<Array<Maybe<Connector>>>;
  createdBy?: Maybe<Identity>;
  created_at: Scalars['DateTime'];
  creator?: Maybe<User>;
  editContext?: Maybe<Array<Maybe<EditUserContext>>>;
  entity_type: Scalars['String'];
  exportFiles?: Maybe<FileConnection>;
  externalReferences?: Maybe<ExternalReferenceConnection>;
  id: Scalars['ID'];
  importFiles?: Maybe<FileConnection>;
  indicators?: Maybe<IndicatorConnection>;
  is_inferred: Scalars['Boolean'];
  jobs?: Maybe<Array<Maybe<Work>>>;
  notes?: Maybe<NoteConnection>;
  objectLabel?: Maybe<LabelConnection>;
  objectMarking?: Maybe<MarkingDefinitionConnection>;
  observable_value: Scalars['String'];
  opinions?: Maybe<OpinionConnection>;
  parent_types: Array<Maybe<Scalars['String']>>;
  pendingFiles?: Maybe<FileConnection>;
  reports?: Maybe<ReportConnection>;
  spec_version: Scalars['String'];
  standard_id: Scalars['String'];
  stixCoreRelationships?: Maybe<StixCoreRelationshipConnection>;
  stixCyberObservableRelationships?: Maybe<StixCyberObservableRelationshipConnection>;
  toStix?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  x_opencti_description?: Maybe<Scalars['String']>;
  x_opencti_inferences?: Maybe<Array<Maybe<Inference>>>;
  x_opencti_score?: Maybe<Scalars['Int']>;
  x_opencti_stix_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type XOpenCtiUserAgentConnectorsArgs = {
  onlyAlive?: InputMaybe<Scalars['Boolean']>;
};


export type XOpenCtiUserAgentExportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentExternalReferencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentImportFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentJobsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentOpinionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentPendingFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentReportsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


export type XOpenCtiUserAgentStixCoreRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCoreRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCoreRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type XOpenCtiUserAgentStixCyberObservableRelationshipsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  confidences?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  filterMode?: InputMaybe<FilterMode>;
  filters?: InputMaybe<Array<InputMaybe<StixCyberObservableRelationshipsFiltering>>>;
  first?: InputMaybe<Scalars['Int']>;
  firstSeenStart?: InputMaybe<Scalars['DateTime']>;
  firstSeenStop?: InputMaybe<Scalars['DateTime']>;
  fromId?: InputMaybe<Scalars['String']>;
  fromTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastSeenStart?: InputMaybe<Scalars['DateTime']>;
  lastSeenStop?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<StixCyberObservableRelationshipsOrdering>;
  orderMode?: InputMaybe<OrderingMode>;
  relationship_type?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  startTimeStart?: InputMaybe<Scalars['DateTime']>;
  startTimeStop?: InputMaybe<Scalars['DateTime']>;
  stopTimeStart?: InputMaybe<Scalars['DateTime']>;
  stopTimeStop?: InputMaybe<Scalars['DateTime']>;
  toId?: InputMaybe<Scalars['String']>;
  toTypes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type XOpenCtiUserAgentAddInput = {
  value?: InputMaybe<Scalars['String']>;
};
