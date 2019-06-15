<template>
  <div class="apollo-example">
    <!-- Cute tiny form -->

    <!-- Apollo watched Graphql query -->
    <ApolloQuery
      :query="require('../graphql/HelloWorld.gql')"
      :variables="{ name }"
    >
      <template v-slot="{ result: { error, data}, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <ul v-else-if="data" class="result apollo">
          <li v-for="item in data.posts" :key="item.id">
          {{ item.name }}-{{ item.description }}

          </li>
        </ul>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
    <!--<ApolloQuery-->
    <!--:query="require('../graphql/HelloWorld.gql')"-->
    <!--&gt;-->
    <!--<template slot-scope="{ result: { loading, error, data } }">-->
    <!--&lt;!&ndash; Loading &ndash;&gt;-->
    <!--<div v-if="loading" class="loading apollo">Loading...</div>-->

    <!--&lt;!&ndash; Error &ndash;&gt;-->
    <!--<div v-else-if="error" class="error apollo">An error occured</div>-->

    <!--&lt;!&ndash; Result &ndash;&gt;-->
    <!--<div v-else-if="data" class="result apollo">{{ data.name }}</div>-->

    <!--&lt;!&ndash; No result &ndash;&gt;-->
    <!--<div v-else class="no-result apollo">No result :(</div>-->
    <!--</template>-->
    <!--</ApolloQuery>-->

    <!-- Tchat example -->
    <!--<ApolloQuery-->
    <!--:query="require('../graphql/Messages.gql')"-->
    <!--&gt;-->
    <!--<ApolloSubscribeToMore-->
    <!--:document="require('../graphql/MessageAdded.gql')"-->
    <!--:update-query="onMessageAdded"-->
    <!--/>-->

    <!--<div slot-scope="{ result: { data } }">-->
    <!--<template v-if="data">-->
    <!--<div-->
    <!--v-for="message of data.messages"-->
    <!--:key="message.id"-->
    <!--class="message"-->
    <!--&gt;-->
    <!--{{ message.text }}-->
    <!--</div>-->
    <!--</template>-->
    <!--</div>-->
    <!--</ApolloQuery>-->

    <!--<ApolloMutation-->
    <!--:mutation="require('../graphql/AddMessage.gql')"-->
    <!--:variables="{-->
    <!--input: {-->
    <!--text: newMessage,-->
    <!--},-->
    <!--}"-->
    <!--class="form"-->
    <!--@done="newMessage = ''"-->
    <!--&gt;-->
    <!--<template slot-scope="{ mutate }">-->
    <!--<form v-on:submit.prevent="formValid && mutate()">-->
    <!--<label for="field-message">Message</label>-->
    <!--<input-->
    <!--id="field-message"-->
    <!--v-model="newMessage"-->
    <!--placeholder="Type a message"-->
    <!--class="input"-->
    <!--&gt;-->
    <!--</form>-->
    <!--</template>-->
    <!--</ApolloMutation>-->

    <!--<div class="images">-->
    <!--<div-->
    <!--v-for="file of files"-->
    <!--:key="file.id"-->
    <!--class="image-item"-->
    <!--&gt;-->
    <!--<img :src="`${$filesRoot}/${file.path}`" class="image"/>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="image-input">-->
    <!--<label for="field-image">Image</label>-->
    <!--<input-->
    <!--id="field-image"-->
    <!--type="file"-->
    <!--accept="image/*"-->
    <!--required-->
    <!--@change="onUploadImage"-->
    <!--&gt;-->
    <!--</div>-->
  </div>
</template>

<script>
  // import FILES from '../graphql/Files.gql'
  // import UPLOAD_FILE from '../graphql/UploadFile.gql'

  export default {
    data () {
      return {
        name: 'Anne',
        newMessage: ''
      }
    },

    apollo: {
      // files: FILES
    },

    computed: {
      formValid () {
        return this.newMessage
      }
    },

    methods: {
      // onMessageAdded (previousResult, { subscriptionData }) {
      //   return {
      //     messages: [
      //       ...previousResult.messages,
      //       subscriptionData.data.messageAdded
      //     ]
      //   }
      // },

      // async onUploadImage ({ target }) {
      //   if (!target.validity.valid) return
      //   await this.$apollo.mutate({
      //     mutation: UPLOAD_FILE,
      //     variables: {
      //       file: target.files[0]
      //     },
      //     update: (store, { data: { singleUpload } }) => {
      //       const data = store.readQuery({ query: FILES })
      //       data.files.push(singleUpload)
      //       store.writeQuery({ query: FILES, data })
      //     }
      //   })
      // }
    }
  }
</script>

<style scoped>


</style>
