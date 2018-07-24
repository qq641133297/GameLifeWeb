<template>
    <div>
      <h3>世界RPG列表</h3>
      <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>品质</th>
              <th>属性</th>
              <th>来源</th>
              <th>等级</th>
              <th>专属强化</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="item in thingList" :key="item.name" :class="item.color">
                  <td >{{item.name}}</td>
                  <td >{{item.quality}}</td>
                  <td>
                    <span v-for="attr in item.attribute" :key="attr" style="display:block">{{attr}}</span>
                  </td>
                  <td>{{item.getway}}</td>
                  <td>{{item.level}}</td>
                  <td>{{item.roleUp}}</td>
              </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
import thing from '@/assets/data/thing.json';
export default {
  data () {
    return {
      thingList: [],
      search: ''
    };
  },
  methods: {
    colorMap (name) {
      name = name.replace('\n', '');
      name = name.replace(' ', '');
      switch (name) {
        case '[罕见]':
          return 'hj';
        case '[极其罕见]':
          return 'jqhj';
        case '[史诗]天绝史诗':
          return 'tjss';
        case '[史诗]传奇至宝':
          return 'qqzb';
        case '[史诗]神话传说':
          return 'shqs';
        case '[史诗]禁断圣物':
          return 'jdsw';
      }
    }
  },
  mounted () {
    this.thingList = thing.map(item => {
      return {
        name: item.name,
        quality: item.quality,
        level: item.level,
        color: this.colorMap(item.quality),
        attribute: item.attribute,
        getway: item.getway,
        roleUp: item.roleUp
      };
    });
  }
};
</script>
<style>
table {
  border: 1px solid #fff;
  border-right: 0;
  border-bottom: 0;
  width: 98%;
}

tr {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

th,
td {
  padding: 10px;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  text-align: center;
  width: 100%;
}

th {
  font-weight: 400;
  background-color: #dadada;
}

.hj {
  background-color: rgba(211, 230, 197, 1);
}
.jqhj {
  background-color: rgba(50, 202, 214, 1);
}
.tjss {
  background-color: rgba(153, 147, 189, 1);
}
.qqzb {
  background-color: rgba(50, 147, 170, 1);
}
.shqs {
  background-color: rgba(189, 84, 129, 1);
}
.jdsw {
  background-color: rgba(204, 83, 78, 1);
}
</style>
