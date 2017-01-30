<template>
    <div class="newsFeed">
      <h1>News Feed</h1>
      <div class="newsFeedItem" v-for="(item, key) in list">
        <p>
          <a target="_blank" :href="item.url" v-text="item.title"></a>
        </p>
        <p>
        </p>
      </div>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
        <span slot="no-more">
          No more news
        </span>
      </infinite-loading>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

const api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story';

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onInfinite() {
      this.$http.get(api, {
        params: {
          page: this.list.length / 20 + 1,
        },
      }).then((res) => {
        if (res.data.hits.length) {
          this.list = this.list.concat(res.data.hits);
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          if (this.list.length / 20 === 10) {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          }
        } else {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        }
      });
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>
