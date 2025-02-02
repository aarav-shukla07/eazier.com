require("dotenv").config();

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

async function main(){
    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        temperature: 0,
        messages: [],
      });
      console.log(msg);
      
}
main();