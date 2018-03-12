<template>
  <div class="main-list-item">
    <div class="list-item-top">
      <div class="list-item-info">
        <div class="info-top">
          <span class="info-class">{{item.class}}</span>
          <span class="info-time">{{item.time}}</span>
        </div>
        <span class="info-title">{{item.title}}</span>
      </div>
      <div class="list-item-img">
        <img :src="item.img" />
      </div>
    </div>
    <div class="list-item-content">
      {{item.content}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="less">
.main-list-item {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(178,186,194,.15);
  background: #fff;
  box-sizing: border-box;
  .list-item-top {
    display: flex;
    align-items: center;
    .list-item-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      .info-title {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 1.2;
        color: #2e3135;
      }
      .info-top {
        margin-bottom: .5rem;
        display: flex;
        align-items: center;
        .info-class {
          font-weight: 500;
          color: #b71ed7;
        }
        .info-time {
          color: #909090;
          margin-left: .5rem;
        }
      }
    }
    .list-item-img {
      width: 5rem;
      height: 5rem;
      border-radius: 2px;
      overflow: hidden;
      & > img  {
        width: 100%;
        height: 100%;
      }
    }
  }
  .list-item-content {
    margin-top: 1rem;
    word-break: break-word;
    line-height: 1.75;
    font-weight: 400;
    font-size: 15px;
  }
}
</style>
