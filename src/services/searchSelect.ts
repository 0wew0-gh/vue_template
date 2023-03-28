export default {
  data() {
    return {
      categoryList: [
        {
          key: "INROOM",
          val: {
            en: "Indoor",
            "zh-CN": "室内",
          },
        },
        {
          key: "OUTDOOR",
          val: {
            en: "Outdoor",
            "zh-CN": "户外",
          },
        },
      ] as any[],
      statusList: [
        {
          key: "1",
          val: {
            en: "Online",
            "zh-CN": "在线",
          },
        },
        {
          key: "0",
          val: {
            en: "Offline",
            "zh-CN": "离线",
          },
        },
      ] as any[],
      writeReadList: [
        {
          key: "sub setpoint",
          val: {
            en: "Set value list",
            "zh-CN": "设置值列表",
          },
        },
        {
          key: "sub status",
          val: {
            en: "Status Value List",
            "zh-CN": "状态值列表",
          },
        },
        {
          key: "sub info",
          val: {
            en: "Device information list",
            "zh-CN": "设备信息列表",
          },
        },
        {
          key: "sub sensor",
          val: {
            en: "Measured values list",
            "zh-CN": "测量值列表",
          },
        },
      ] as any[],
      dataAttributeList: [
        {
          key: 1,
          val: {
            en: "Address",
            "zh-CN": "地址",
          },
        },
        {
          key: 2,
          val: {
            en: "Name",
            "zh-CN": "名称",
          },
        },
        {
          key: 3,
          val: {
            en: "Numerical value",
            "zh-CN": "数值",
          },
        },
        {
          key: 4,
          val: {
            en: "Read/Write",
            "zh-CN": "读/写",
          },
        },
        {
          key: 5,
          val: {
            en: "Lower limit",
            "zh-CN": "下限",
          },
        },
        {
          key: 6,
          val: {
            en: "Upper limit",
            "zh-CN": "上限",
          },
        },
        {
          key: 7,
          val: {
            en: "Unit",
            "zh-CN": "单位",
          },
        },
      ] as any[],
      enableList: [
        {
          key: -1,
          val: {
            en: "All",
            "zh-CN": "全部",
          },
        },
        {
          key: 1,
          val: {
            en: "Enable",
            "zh-CN": "启用",
          },
        },
        {
          key: 0,
          val: {
            en: "Unenable",
            "zh-CN": "停用",
          },
        },
      ] as any[],
      localeList: [
        {
          key: "null",
          val: " ",
        },
        {
          key: "zh-CN",
          val: "中文",
        },
        {
          key: "en",
          val: "English",
        },
      ] as any[],
      adminSetList: [
        // {
        //   key: "set_super_admin",
        //   val: {
        //     en: "Super administrator",
        //     "zh-CN": "超级管理员",
        //   },
        // },
        {
          key: "psm",
          val: {
            en: "Use remote maintenance",
            "zh-CN": "使用远程维护",
          },
        },
        {
          key: "psau",
          val: {
            en: "Add user",
            "zh-CN": "添加用户",
          },
        },
        {
          key: "psdu",
          val: {
            en: "Delete user",
            "zh-CN": "删除用户",
          },
        },
        {
          key: "psp",
          val: {
            en: "Modify other account permissions",
            "zh-CN": "修改其他账号权限",
          },
        },
        {
          key: "psps",
          val: {
            en: "Modify paid items",
            "zh-CN": "修改付费项",
          },
        },
        {
          key: "psoi",
          val: {
            en: "Modify other account basic information",
            "zh-CN": "修改其他账号基础信息",
          },
        },
        {
          key: "pspw",
          val: {
            en: "Modify other account passwords",
            "zh-CN": "修改其他账号密码",
          },
        },
        {
          key: "pspms",
          val: {
            en: "Edit settings of other account items (devices)",
            "zh-CN": "编辑其他账号项目(设备)的设置",
          },
        },
        {
          key: "pstsv",
          val: {
            en: "Two-step verification of unbinding other accounts",
            "zh-CN": "解绑其他账号的两步验证",
          },
        },
        {
          key: "psg",
          val: {
            en: "编辑组信息",
            "zh-CN": "编辑组信息",
          },
        },
        {
          key: "psn",
          val: {
            en: "Edit announcement",
            "zh-CN": "编辑公告",
          },
        },
        {
          key: "psc",
          val: {
            en: "Edit city information",
            "zh-CN": "编辑城市信息",
          },
        },
        {
          key: "pspoll",
          val: {
            en: "Edit detection parameters",
            "zh-CN": "编辑检测参数",
          },
        },
        {
          key: "psmode",
          val: {
            en: "Edit device model",
            "zh-CN": "编辑设备型号",
          },
        },
        {
          key: "pss",
          val: {
            en: "Edit environmental standards",
            "zh-CN": "编辑环境标准",
          },
        },
      ] as any[],
    };
  },
};
