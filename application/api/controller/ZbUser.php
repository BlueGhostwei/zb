<?php
namespace app\api\controller;

use app\common\controller\Api;

class ZbUser extends Api
{

    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    public function index()
    {
        //测试
        $this->success('请求成功');
    }
}