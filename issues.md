# Issues encountered

This is an attempt to document all issues I encountered while following tutorial on [graphql and NodeJs](https://www.howtographql.com) 

1. Failure to deploy ([ERROR] in /home/user/Documents/Projects/graphql/hackernews-node/database/graphcool.yml: Errors while validating graphcool.yml:)

    ```
      I attempted to deploy using     **graphcool-framework deploy** on my terminal considering that I had just done so while using graphcool-framework to scaffold a server for apollo.

      Doc said i should run **yarn graphcool deploy** but I have been on npm commands so that wasnt an option. 

      To get around it, I ran it as a script as the playground that was already written. So I added deploy script to my package.json
    ```