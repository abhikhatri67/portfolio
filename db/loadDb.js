import {DataAPIClient} from "@datastax/astra-db-ts";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";
import "dotenv/config";
import OpenAI from "openai";
import sampleData from "./sample-data.json" with {type: "json"};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
})