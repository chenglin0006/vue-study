import CmpEdit from './SelfEdit.js'
export const newData = [
    {
        id: 'brandNameLike',
        name: '中文名称',
        type: 'input'
    },
    {
        id: 'brandNameEnLike',
        name: '英文名称',
        type: 'input',
        rules:[{required:true,message:'不能为空',trigger:'blur'}]
    },
    {
        id: 'hasLogo',
        name: '水印logo',
        type:'select',
        data:[]
    },
    {
        id: 'test',
        name: 'test',
        type:'selfComponent',
        comName:'cmp-self',
    }
]
