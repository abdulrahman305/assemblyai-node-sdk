// this file is generated by typescript/scripts/generate-types.ts
/* tslint:disable */
/* eslint-disable */

/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? OneOf<[XOR<A, B>, ...Rest]>
  : never;

/**
 * @description Either success, or unavailable in the rare case that the model failed
 * @enum {string}
 */
export type AudioIntelligenceModelStatus = "success" | "unavailable";

export type AutoHighlightResult = {
  /** @description The total number of times the key phrase appears in the audio file */
  count: number;
  /**
   * Format: float
   * @description The total relevancy to the overall audio file of this key phrase - a greater number means more relevant
   */
  rank: number;
  /** @description The text itself of the key phrase */
  text: string;
  /** @description The timestamp of the of the key phrase */
  timestamps: Timestamp[];
};

/**
 * @description An array of results for the Key Phrases model, if it is enabled.
 * See [Key phrases](https://www.assemblyai.com/docs/Models/key_phrases) for more information.
 */
export type AutoHighlightsResult = {
  /** @description A temporally-sequential array of Key Phrases */
  results: AutoHighlightResult[];
};

/** @description Chapter of the audio file */
export type Chapter = {
  /** @description The starting time, in milliseconds, for the chapter */
  end: number;
  /** @description An ultra-short summary (just a few words) of the content spoken in the chapter */
  gist: string;
  /** @description A single sentence summary of the content spoken during the chapter */
  headline: string;
  /** @description The starting time, in milliseconds, for the chapter */
  start: number;
  /** @description A one paragraph summary of the content spoken during the chapter */
  summary: string;
};

export type ContentSafetyLabel = {
  /**
   * Format: double
   * @description The confidence score for the topic being discussed, from 0 to 1
   */
  confidence: number;
  /** @description The label of the sensitive topic */
  label: string;
  /**
   * Format: double
   * @description How severely the topic is discussed in the section, from 0 to 1
   */
  severity: number;
};

export type ContentSafetyLabelResult = {
  /** @description An array of safety labels, one per sensitive topic that was detected in the section */
  labels: ContentSafetyLabel[];
  /** @description The sentence index at which the section ends */
  sentences_idx_end: number;
  /** @description The sentence index at which the section begins */
  sentences_idx_start: number;
  /** @description The transcript of the section flagged by the Content Moderation model */
  text: string;
  /** @description Timestamp information for the section */
  timestamp: Timestamp;
};

/**
 * @description An array of results for the Content Moderation model, if it is enabled.
 * See [Content moderation](https://www.assemblyai.com/docs/Models/content_moderation) for more information.
 */
export type ContentSafetyLabelsResult = {
  results: ContentSafetyLabelResult[];
  /** @description A summary of the Content Moderation severity results for the entire audio file */
  severity_score_summary: {
    [key: string]: SeverityScoreSummary;
  };
  /** @description The status of the Content Moderation model. Either success, or unavailable in the rare case that the model failed. */
  status: AudioIntelligenceModelStatus;
  /** @description A summary of the Content Moderation confidence results for the entire audio file */
  summary: {
    [key: string]: number;
  };
};

export type CreateRealtimeTemporaryTokenParams = {
  /** @description The amount of time until the token expires in seconds */
  expires_in: number;
};

/** @description A detected entity */
export type Entity = {
  /** @description The ending time, in milliseconds, for the detected entity in the audio file */
  end: number;
  /** @description The type of entity for the detected entity */
  entity_type: EntityType;
  /** @description The starting time, in milliseconds, at which the detected entity appears in the audio file */
  start: number;
  /** @description The text for the detected entity */
  text: string;
};

/**
 * @description The type of entity for the detected entity
 * @enum {string}
 */
export type EntityType =
  | "banking_information"
  | "blood_type"
  | "credit_card_cvv"
  | "credit_card_expiration"
  | "credit_card_number"
  | "date"
  | "date_of_birth"
  | "drivers_license"
  | "drug"
  | "email_address"
  | "event"
  | "injury"
  | "language"
  | "location"
  | "medical_condition"
  | "medical_process"
  | "money_amount"
  | "nationality"
  | "occupation"
  | "organization"
  | "password"
  | "person_age"
  | "person_name"
  | "phone_number"
  | "political_affiliation"
  | "religion"
  | "time"
  | "url"
  | "us_social_security_number";

export type Error = {
  /** @description Error message */
  error: string;
  /** @constant */
  status?: "error";
};

export type LemurActionItemsParams = LemurBaseParams;

export type LemurActionItemsResponse = LemurBaseResponse & {
  /** @description The response generated by LeMUR */
  response: string;
};

export type LemurBaseParams = {
  /** @description Context to provide the model. This can be a string or a free-form JSON value. */
  context?: OneOf<
    [
      string,
      {
        [key: string]: unknown;
      }
    ]
  >;
  final_model?: LemurModel;
  /**
   * @description Custom formatted transcript data. Maximum size is the context limit of the selected model, which defaults to 100000.
   * Use either transcript_ids or input_text as input into LeMUR.
   */
  input_text?: string;
  /** @description Max output size in tokens, up to 4000 */
  max_output_size?: number;
  /**
   * Format: float
   * @description The temperature to use for the model.
   * Higher values result in answers that are more creative, lower values are more conservative.
   * Can be any value between 0.0 and 1.0 inclusive.
   */
  temperature?: number;
  /**
   * @description A list of completed transcripts with text. Up to a maximum of 100 files or 100 hours, whichever is lower.
   * Use either transcript_ids or input_text as input into LeMUR.
   */
  transcript_ids?: string[];
};

export type LemurBaseResponse = {
  /** @description The ID of the LeMUR request */
  request_id: string;
};

/**
 * @description The model that is used for the final prompt after compression is performed (options: "basic" and "default").
 *
 * @enum {string}
 */
export type LemurModel = "default" | "basic";

export type LemurQuestion = {
  /** @description How you want the answer to be returned. This can be any text. Can't be used with answer_options. Examples: "short sentence", "bullet points" */
  answer_format?: string;
  /** @description What discrete options to return. Useful for precise responses. Can't be used with answer_format. Example: ["Yes", "No"] */
  answer_options?: string[];
  /** @description Any context about the transcripts you wish to provide. This can be a string or any object. */
  context?: OneOf<
    [
      string,
      {
        [key: string]: unknown;
      }
    ]
  >;
  /** @description The question you wish to ask. For more complex questions use default model. */
  question: string;
};

/** @description An answer generated by LeMUR and its question */
export type LemurQuestionAnswer = {
  /** @description The answer generated by LeMUR */
  answer: string;
  /** @description The question for LeMUR to answer */
  question: string;
};

export type LemurQuestionAnswerParams = LemurBaseParams & {
  /** @description A list of questions to ask */
  questions: LemurQuestion[];
};

export type LemurQuestionAnswerResponse = LemurBaseResponse & {
  /** @description The answers generated by LeMUR and their questions */
  response: LemurQuestionAnswer[];
};

export type LemurSummaryParams = LemurBaseParams & {
  /** @description How you want the summary to be returned. This can be any text. Examples: "TLDR", "bullet points" */
  answer_format?: string;
};

export type LemurSummaryResponse = LemurBaseResponse & {
  /** @description The response generated by LeMUR */
  response: string;
};

export type LemurTaskParams = LemurBaseParams & {
  /** @description Your text to prompt the model to produce a desired output, including any context you want to pass into the model. */
  prompt: string;
};

export type LemurTaskResponse = LemurBaseResponse & {
  /** @description The response generated by LeMUR */
  response: string;
};

export type ListTranscriptParams = {
  /** @description Get transcripts that were created after this transcript ID */
  after_id?: string;
  /** @description Get transcripts that were created before this transcript ID */
  before_id?: string;
  /**
   * Format: date
   * @description Only get transcripts created on this date
   */
  created_on?: string;
  /**
   * Format: int64
   * @description Maximum amount of transcripts to retrieve
   * @default 10
   */
  limit?: number;
  /** @description Filter by transcript status */
  status?: TranscriptStatus;
  /** @description Only get throttled transcripts, overrides the status filter */
  throttled_only?: boolean;
};

export type PageDetails = {
  current_url: string;
  limit: number;
  next_url?: string | null;
  prev_url: string;
  result_count: number;
};

export type ParagraphsResponse = {
  audio_duration: number;
  /** Format: double */
  confidence: number;
  id: string;
  paragraphs: TranscriptParagraph[];
};

/** @enum {string} */
export type PiiPolicy =
  | "medical_process"
  | "medical_condition"
  | "blood_type"
  | "drug"
  | "injury"
  | "number_sequence"
  | "email_address"
  | "date_of_birth"
  | "phone_number"
  | "us_social_security_number"
  | "credit_card_number"
  | "credit_card_expiration"
  | "credit_card_cvv"
  | "date"
  | "nationality"
  | "event"
  | "language"
  | "location"
  | "money_amount"
  | "person_name"
  | "person_age"
  | "organization"
  | "political_affiliation"
  | "occupation"
  | "religion"
  | "drivers_license"
  | "banking_information";

export type PurgeLemurRequestDataResponse = {
  /** @description Whether the request data was deleted */
  deleted: boolean;
  /** @description The ID of the deletion request of the LeMUR request */
  request_id: string;
  /** @description The ID of the LeMUR request to purge the data for */
  request_id_to_purge: string;
};

export type RealtimeTemporaryTokenResponse = {
  /** @description The temporary authentication token for real-time transcription */
  token: string;
};

export type RedactedAudioResponse = {
  /** @description The URL of the redacted audio file */
  redacted_audio_url: string;
  /** @description The status of the redacted audio */
  status: RedactedAudioStatus;
};

/**
 * @description The status of the redacted audio
 * @enum {string}
 */
export type RedactedAudioStatus = "redacted_audio_ready";

export type SentencesResponse = {
  audio_duration: number;
  /** Format: double */
  confidence: number;
  id: string;
  sentences: TranscriptSentence[];
};

/** @enum {unknown} */
export type Sentiment = "POSITIVE" | "NEUTRAL" | "NEGATIVE";

/** @description The result of the sentiment analysis model */
export type SentimentAnalysisResult = {
  /**
   * Format: double
   * @description The confidence score for the detected sentiment of the sentence, from 0 to 1
   */
  confidence: number;
  /** @description The ending time, in milliseconds, of the sentence */
  end: number;
  /** @description The detected sentiment for the sentence, one of POSITIVE, NEUTRAL, NEGATIVE */
  sentiment: Sentiment;
  /** @description The speaker of the sentence if [Speaker Diarization](https://www.assemblyai.com/docs/models/speaker-diarization) is enabled, else null */
  speaker?: string | null;
  /** @description The starting time, in milliseconds, of the sentence */
  start: number;
  /** @description The transcript of the sentence */
  text: string;
};

export type SeverityScoreSummary = {
  /** Format: double */
  high: number;
  /** Format: double */
  low: number;
  /** Format: double */
  medium: number;
};

/**
 * @description The replacement logic for detected PII, can be "entity_type" or "hash". See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more details.
 * @enum {string}
 */
export type SubstitutionPolicy = "entity_type" | "hash";

/**
 * @description Format of the subtitles
 * @enum {string}
 */
export type SubtitleFormat = "srt" | "vtt";

/**
 * @description The model to summarize the transcript
 * @default informative
 * @enum {string}
 */
export type SummaryModel = "informative" | "conversational" | "catchy";

/**
 * @description The type of summary
 * @default bullets
 * @enum {string}
 */
export type SummaryType =
  | "bullets"
  | "bullets_verbose"
  | "gist"
  | "headline"
  | "paragraph";

/** @description Timestamp containing a start and end property in milliseconds */
export type Timestamp = {
  /** @description The end time in milliseconds */
  end: number;
  /** @description The start time in milliseconds */
  start: number;
};

/**
 * @description The result of the Topic Detection model, if it is enabled.
 * See [Topic Detection](https://www.assemblyai.com/docs/Models/iab_classification) for more information.
 */
export type TopicDetectionModelResult = {
  /** @description An array of results for the Topic Detection model */
  results: TopicDetectionResult[];
  /** @description The status of the Topic Detection model. Either success, or unavailable in the rare case that the model failed. */
  status: AudioIntelligenceModelStatus;
  /** @description The overall relevance of topic to the entire audio file */
  summary: {
    [key: string]: number;
  };
};

/** @description The result of the topic detection model */
export type TopicDetectionResult = {
  labels?: {
    /** @description The IAB taxonomical label for the label of the detected topic, where > denotes supertopic/subtopic relationship */
    label: string;
    /**
     * Format: double
     * @description How relevant the detected topic is of a detected topic
     */
    relevance: number;
  }[];
  /** @description The text in the transcript in which a detected topic occurs */
  text: string;
  timestamp?: Timestamp;
};

/** @description A transcript object */
export type Transcript = {
  /**
   * @deprecated
   * @description The acoustic model that was used for the transcript
   */
  acoustic_model: string;
  /**
   * Format: float
   * @description The duration of this transcript object's media file, in seconds
   */
  audio_duration?: number | null;
  /** @description The point in time, in milliseconds, in the file at which the transcription was terminated */
  audio_end_at?: number | null;
  /** @description The point in time, in milliseconds, in the file at which the transcription was started */
  audio_start_from?: number | null;
  /** @description The URL of the media that was transcribed */
  audio_url: string;
  /** @description Whether [Auto Chapters](https://www.assemblyai.com/docs/Models/auto_chapters) is enabled, can be true or false */
  auto_chapters?: boolean | null;
  /** @description Whether Key Phrases is enabled, either true or false */
  auto_highlights: boolean;
  /**
   * @description An array of results for the Key Phrases model, if it is enabled.
   * See [Key phrases](https://www.assemblyai.com/docs/Models/key_phrases) for more information.
   */
  auto_highlights_result?: AutoHighlightsResult | null;
  /** @description The word boost parameter value */
  boost_param?: string | null;
  /** @description An array of temporally sequential chapters for the audio file */
  chapters?: Chapter[] | null;
  /**
   * Format: double
   * @description The confidence score for the transcript, between 0.0 (low confidence) and 1.0 (high confidence)
   */
  confidence?: number | null;
  /** @description Whether [Content Moderation](https://www.assemblyai.com/docs/Models/content_moderation) is enabled, can be true or false */
  content_safety?: boolean | null;
  /**
   * @description An array of results for the Content Moderation model, if it is enabled.
   * See [Content moderation](https://www.assemblyai.com/docs/Models/content_moderation) for more information.
   */
  content_safety_labels?: ContentSafetyLabelsResult | null;
  /** @description Customize how words are spelled and formatted using to and from values */
  custom_spelling?: TranscriptCustomSpelling[] | null;
  /** @description Whether custom topics is enabled, either true or false */
  custom_topics?: boolean | null;
  /** @description Transcribe Filler Words, like "umm", in your media file; can be true or false */
  disfluencies?: boolean | null;
  /** @description Whether [Dual channel transcription](https://www.assemblyai.com/docs/Models/speech_recognition#dual-channel-transcription) is enabled, either true or false */
  dual_channel?: boolean | null;
  /**
   * @description An array of results for the Entity Detection model, if it is enabled.
   * See [Entity detection](https://www.assemblyai.com/docs/Models/entity_detection) for more information.
   */
  entities?: Entity[] | null;
  /** @description Whether [Entity Detection](https://www.assemblyai.com/docs/Models/entity_detection) is enabled, can be true or false */
  entity_detection?: boolean | null;
  /** @description Error message of why the transcript failed */
  error?: string;
  /** @description Whether [Profanity Filtering](https://www.assemblyai.com/docs/Models/speech_recognition#profanity-filtering) is enabled, either true or false */
  filter_profanity?: boolean | null;
  /** @description Whether Text Formatting is enabled, either true or false */
  format_text?: boolean | null;
  /** @description Whether [Topic Detection](https://www.assemblyai.com/docs/Models/iab_classification) is enabled, can be true or false */
  iab_categories?: boolean | null;
  /**
   * @description The result of the Topic Detection model, if it is enabled.
   * See [Topic Detection](https://www.assemblyai.com/docs/Models/iab_classification) for more information.
   */
  iab_categories_result?: TopicDetectionModelResult | null;
  /** @description The unique identifier of your transcript */
  id: string;
  /**
   * @description The language of your audio file.
   * Possible values are found in [Supported Languages](https://www.assemblyai.com/docs/Concepts/supported_languages).
   * The default value is 'en_us'.
   */
  language_code?: TranscriptLanguageCode;
  /** @description Whether [Automatic language detection](https://www.assemblyai.com/docs/Models/speech_recognition#automatic-language-detection) is enabled, either true or false */
  language_detection?: boolean | null;
  /**
   * @deprecated
   * @description The language model that was used for the transcript
   */
  language_model: string;
  /** @description Whether Automatic Punctuation is enabled, either true or false */
  punctuate?: boolean | null;
  /** @description Whether [PII Redaction](https://www.assemblyai.com/docs/Models/pii_redaction) is enabled, either true or false */
  redact_pii: boolean;
  /**
   * @description Whether a redacted version of the audio file was generated,
   * either true or false. See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more information.
   */
  redact_pii_audio?: boolean | null;
  /**
   * @description The audio quality of the PII-redacted audio file, if redact_pii_audio is enabled.
   * See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more information.
   */
  redact_pii_audio_quality?: string | null;
  /**
   * @description The list of PII Redaction policies that were enabled, if PII Redaction is enabled.
   * See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more information.
   */
  redact_pii_policies?: PiiPolicy[] | null;
  /** @description The replacement logic for detected PII, can be "entity_type" or "hash". See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more details. */
  redact_pii_sub?: SubstitutionPolicy;
  /** @description Whether [Sentiment Analysis](https://www.assemblyai.com/docs/Models/sentiment_analysis) is enabled, can be true or false */
  sentiment_analysis?: boolean | null;
  /**
   * @description An array of results for the Sentiment Analysis model, if it is enabled.
   * See [Sentiment analysis](https://www.assemblyai.com/docs/Models/sentiment_analysis) for more information.
   */
  sentiment_analysis_results?: SentimentAnalysisResult[] | null;
  /** @description Whether [Speaker diarization](https://www.assemblyai.com/docs/Models/speaker_diarization) is enabled, can be true or false */
  speaker_labels?: boolean | null;
  /** @description Tell the speaker label model how many speakers it should attempt to identify, up to 10. See [Speaker diarization](https://www.assemblyai.com/docs/Models/speaker_diarization) for more details. */
  speakers_expected?: number | null;
  /**
   * Format: float
   * @description Defaults to null. Reject audio files that contain less than this fraction of speech.
   * Valid values are in the range [0, 1] inclusive.
   */
  speech_threshold?: number | null;
  /**
   * @deprecated
   * @description Whether speed boost is enabled
   */
  speed_boost?: boolean | null;
  /** @description The status of your transcript. Possible values are queued, processing, completed, or error. */
  status: TranscriptStatus;
  /** @description Whether [Summarization](https://www.assemblyai.com/docs/Models/summarization) is enabled, either true or false */
  summarization: boolean;
  /** @description The generated summary of the media file, if [Summarization](https://www.assemblyai.com/docs/Models/summarization) is enabled */
  summary?: string | null;
  /**
   * @description The Summarization model used to generate the summary,
   * if [Summarization](https://www.assemblyai.com/docs/Models/summarization) is enabled
   */
  summary_model?: string | null;
  /** @description The type of summary generated, if [Summarization](https://www.assemblyai.com/docs/Models/summarization) is enabled */
  summary_type?: string | null;
  /** @description The textual transcript of your media file */
  text?: string | null;
  /** @description True while a request is throttled and false when a request is no longer throttled */
  throttled?: boolean | null;
  /** @description The list of custom topics provided if custom topics is enabled */
  topics?: string[];
  /**
   * @description When dual_channel or speaker_labels is enabled, a list of turn-by-turn utterance objects.
   * See [Speaker diarization](https://www.assemblyai.com/docs/Models/speaker_diarization) for more information.
   */
  utterances?: TranscriptUtterance[] | null;
  /** @description Whether webhook authentication details were provided */
  webhook_auth: boolean;
  /** @description The header name which should be sent back with webhook calls */
  webhook_auth_header_name?: string | null;
  /** @description The status code we received from your server when delivering your webhook, if a webhook URL was provided */
  webhook_status_code?: number | null;
  /** @description The URL to which we send webhooks upon trancription completion */
  webhook_url?: string | null;
  /** @description The list of custom vocabulary to boost transcription probability for */
  word_boost?: string[];
  /**
   * @description An array of temporally-sequential word objects, one for each word in the transcript.
   * See [Speech recognition](https://www.assemblyai.com/docs/Models/speech_recognition) for more information.
   */
  words?: TranscriptWord[] | null;
};

/**
 * @description The word boost parameter value
 * @enum {string}
 */
export type TranscriptBoostParam = "low" | "default" | "high";

/** @description Object containing words or phrases to replace, and the word or phrase to replace with */
export type TranscriptCustomSpelling = {
  /** @description Words or phrases to replace */
  from: string[];
  /** @description Word or phrase to replace with */
  to: string;
};

/**
 * @description The language of your audio file. Possible values are found in [Supported Languages](https://www.assemblyai.com/docs/Concepts/supported_languages).
 * The default value is 'en_us'.
 *
 * @default en_us
 * @enum {string}
 */
export type TranscriptLanguageCode =
  | "en"
  | "en_au"
  | "en_uk"
  | "en_us"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "pt"
  | "nl"
  | "hi"
  | "ja"
  | "zh"
  | "fi"
  | "ko"
  | "pl"
  | "ru"
  | "tr"
  | "uk"
  | "vi";

export type TranscriptList = {
  page_details: PageDetails;
  transcripts: TranscriptListItem[];
};

export type TranscriptListItem = {
  audio_url: string;
  completed?: Date;
  created: Date;
  id: string;
  resource_url: string;
  status: TranscriptStatus;
};

/** @description The parameters for creating a transcript */
export type TranscriptOptionalParams = {
  /** @description The point in time, in milliseconds, to stop transcribing in your media file */
  audio_end_at?: number;
  /** @description The point in time, in milliseconds, to begin transcribing in your media file */
  audio_start_from?: number;
  /** @description Enable [Auto Chapters](https://www.assemblyai.com/docs/Models/auto_chapters), can be true or false */
  auto_chapters?: boolean;
  /** @description Whether Key Phrases is enabled, either true or false */
  auto_highlights?: boolean;
  /** @description The word boost parameter value */
  boost_param?: TranscriptBoostParam;
  /** @description Enable [Content Moderation](https://www.assemblyai.com/docs/Models/content_moderation), can be true or false */
  content_safety?: boolean;
  /** @description Customize how words are spelled and formatted using to and from values */
  custom_spelling?: TranscriptCustomSpelling[];
  /** @description Whether custom topics is enabled, either true or false */
  custom_topics?: boolean;
  /** @description Transcribe Filler Words, like "umm", in your media file; can be true or false */
  disfluencies?: boolean;
  /** @description Enable [Dual Channel](https://assemblyai.com/docs/Models/speech_recognition#dual-channel-transcription) transcription, can be true or false */
  dual_channel?: boolean;
  /** @description Enable [Entity Detection](https://www.assemblyai.com/docs/Models/entity_detection), can be true or false */
  entity_detection?: boolean;
  /** @description Filter profanity from the transcribed text, can be true or false */
  filter_profanity?: boolean;
  /** @description Enable Text Formatting, can be true or false */
  format_text?: boolean;
  /** @description Enable [Topic Detection](https://www.assemblyai.com/docs/Models/iab_classification), can be true or false */
  iab_categories?: boolean;
  /**
   * @description The language of your audio file. Possible values are found in [Supported Languages](https://www.assemblyai.com/docs/Concepts/supported_languages).
   * The default value is 'en_us'.
   */
  language_code?: TranscriptLanguageCode | null;
  /** @description Whether [Automatic language detection](https://www.assemblyai.com/docs/Models/speech_recognition#automatic-language-detection) is enabled, either true or false */
  language_detection?: boolean;
  /** @description Enable Automatic Punctuation, can be true or false */
  punctuate?: boolean;
  /** @description Redact PII from the transcribed text using the Redact PII model, can be true or false */
  redact_pii?: boolean;
  /** @description Generate a copy of the original media file with spoken PII "beeped" out, can be true or false. See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more details. */
  redact_pii_audio?: boolean;
  /**
   * @description Controls the filetype of the audio created by redact_pii_audio. Currently supports mp3 (default) and wav. See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more details.
   * @default mp3
   */
  redact_pii_audio_quality?: string;
  /** @description The list of PII Redaction policies to enable. See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more details. */
  redact_pii_policies?: PiiPolicy[];
  /** @description The replacement logic for detected PII, can be "entity_type" or "hash". See [PII redaction](https://www.assemblyai.com/docs/Models/pii_redaction) for more details. */
  redact_pii_sub?: SubstitutionPolicy | null;
  /** @description Enable [Sentiment Analysis](https://www.assemblyai.com/docs/Models/sentiment_analysis), can be true or false */
  sentiment_analysis?: boolean;
  /** @description Enable [Speaker diarization](https://www.assemblyai.com/docs/Models/speaker_diarization), can be true or false */
  speaker_labels?: boolean;
  /**
   * @description Tell the speaker label model how many speakers it should attempt to identify, up to 10. See [Speaker diarization](https://www.assemblyai.com/docs/Models/speaker_diarization) for more details.
   * @default null
   */
  speakers_expected?: number | null;
  /**
   * Format: float
   * @description Reject audio files that contain less than this fraction of speech.
   * Valid values are in the range [0, 1] inclusive.
   *
   * @default null
   */
  speech_threshold?: number | null;
  /** @description Enable [Summarization](https://www.assemblyai.com/docs/Models/summarization), can be true or false */
  summarization?: boolean;
  /**
   * @description The model to summarize the transcript
   * @default informative
   */
  summary_model?: SummaryModel;
  /**
   * @description The type of summary
   * @default bullets
   */
  summary_type?: SummaryType;
  /** @description The list of custom topics provided, if custom topics is enabled */
  topics?: string[];
  /**
   * @description The header name which should be sent back with webhook calls
   * @default null
   */
  webhook_auth_header_name?: string | null;
  /**
   * @description Specify a header name and value to send back with a webhook call for added security
   * @default null
   */
  webhook_auth_header_value?: string | null;
  /** @description The URL to which AssemblyAI send webhooks upon trancription completion */
  webhook_url?: string;
  /** @description The list of custom vocabulary to boost transcription probability for */
  word_boost?: string[];
};

export type TranscriptParagraph = {
  /** Format: double */
  confidence: number;
  end: number;
  start: number;
  text: string;
  words: TranscriptWord[];
};

/** @description The parameters for creating a transcript */
export type TranscriptParams = TranscriptOptionalParams & {
  /** @description The URL of the audio or video file to transcribe. */
  audio_url: string;
};

export type TranscriptSentence = {
  /** Format: double */
  confidence: number;
  end: number;
  start: number;
  text: string;
  words: TranscriptWord[];
};

/**
 * @description The status of your transcript. Possible values are queued, processing, completed, or error.
 * @enum {string}
 */
export type TranscriptStatus = "queued" | "processing" | "completed" | "error";

export type TranscriptUtterance = {
  /**
   * Format: double
   * @description The confidence score for the transcript of this utterance
   */
  confidence: number;
  /** @description The ending time, in milliseconds, of the utterance in the audio file */
  end: number;
  /** @description The speaker of this utterance, where each speaker is assigned a sequential capital letter - e.g. "A" for Speaker A, "B" for Speaker B, etc. */
  speaker: string;
  /** @description The starting time, in milliseconds, of the utterance in the audio file */
  start: number;
  /** @description The text for this utterance */
  text: string;
  /** @description The words in the utterance. */
  words: TranscriptWord[];
};

export type TranscriptWord = {
  /** Format: double */
  confidence: number;
  end: number;
  speaker?: string | null;
  start: number;
  text: string;
};

export type UploadedFile = {
  /** @description A URL that points to your audio file, accessible only by AssemblyAI's servers */
  upload_url: string;
};

export type WordSearchMatch = {
  /** @description The total amount of times the word is in the transcript */
  count: number;
  /** @description An array of all index locations for that word within the `words` array of the completed transcript */
  indexes: number[];
  /** @description The matched word */
  text: string;
  /** @description An array of timestamps */
  timestamps: WordSearchTimestamp[];
};

export type WordSearchResponse = {
  /** @description The ID of the transcript */
  id: string;
  /** @description The matches of the search */
  matches: WordSearchMatch[];
  /** @description The total count of all matched instances. For e.g., word 1 matched 2 times, and word 2 matched 3 times, `total_count` will equal 5. */
  total_count: number;
};

/** @description An array of timestamps structured as [`start_time`, `end_time`] in milliseconds */
export type WordSearchTimestamp = number[];
