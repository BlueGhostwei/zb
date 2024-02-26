<?php

namespace app\admin\model;

use think\Model;


class Zuser extends Model
{

    

    

    // 表名
    protected $name = 'zuser';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'type_id_text',
        'switch_text',
        'is_business_text',
        'is_designer_text',
        'is_vip_text',
        'vip_endtime_text'
    ];
    

    
    public function getTypeIdList()
    {
        return ['1' => __('Type_id 1'), '2' => __('Type_id 2')];
    }

    public function getSwitchList()
    {
        return ['1' => __('Switch 1'), '2' => __('Switch 2')];
    }

    public function getIsBusinessList()
    {
        return ['1' => __('Is_business 1'), '2' => __('Is_business 2')];
    }

    public function getIsDesignerList()
    {
        return ['1' => __('Is_designer 1'), '2' => __('Is_designer 2')];
    }

    public function getIsVipList()
    {
        return ['1' => __('Is_vip 1'), '2' => __('Is_vip 2')];
    }


    public function getTypeIdTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['type_id']) ? $data['type_id'] : '');
        $list = $this->getTypeIdList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getSwitchTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['switch']) ? $data['switch'] : '');
        $list = $this->getSwitchList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getIsBusinessTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['is_business']) ? $data['is_business'] : '');
        $list = $this->getIsBusinessList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getIsDesignerTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['is_designer']) ? $data['is_designer'] : '');
        $list = $this->getIsDesignerList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getIsVipTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['is_vip']) ? $data['is_vip'] : '');
        $list = $this->getIsVipList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getVipEndtimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['vip_endtime']) ? $data['vip_endtime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setVipEndtimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }


}
