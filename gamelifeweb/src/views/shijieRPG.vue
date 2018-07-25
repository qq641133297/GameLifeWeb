<template>
  <v-card>
    <v-card-title>
      世界RPG装备列表
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search..." single-line hide-details></v-text-field>
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-data-table :headers="headers" :items="thingList" class="elevation-1" :search="search">
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{props.item.name}}</td>
          <td>{{props.item.quality}}</td>
          <td class="text-xs-left">
            <span v-for="attr in props.item.attribute" :key="attr" style="display:block">{{attr}}</span>
          </td>
          <td class="text-xs-left">{{props.item.getway}}</td>
          <td class="text-xs-right">{{props.item.level}}</td>
          <td>{{props.item.roleUp}}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import thing from '@/assets/data/thing.json';
export default {
  data () {
    return {
      thingList: [],
      search: '',
      headers: [
        {
          text: '名称',
          align: 'left',
          value: 'name'
        },
        { text: '品质', value: 'quality' },
        { text: '属性', value: 'attribute', align: 'left', sortable: false },
        { text: '获取方式', value: 'getway' },
        { text: '等级', value: 'level' },
        { text: '专属强化', value: 'roleUp' }
      ]
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
