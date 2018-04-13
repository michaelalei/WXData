<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;


class Demo extends CI_Controller {
    public function index() {

        $rows = DB::select('student', ['*'], '');

        $this->json([
            'code' => 0,
            'data' => [
                'msg' => 'Hello World'
            ],
            'rows' => $rows
        ]);
    }

    public function course() {

        $key = $this->uri->segment(5, "");
        $key = urldecode($key);

        $condition = 'title like "%'.$key.'%"';

        $rows = DB::select('wxsd_course', ['*'], $condition);

        $this->json([
            'code' => 0,
            'data' => [
                'msg' => 'Hello World'
            ],
            'data' => $rows,
            'key' => $key
        ]);
    }

    //返回某个课程的所有章节, 以及这个课程程序
    public function section() {
      
        $cid = $this->uri->segment(5, "");

        //获取章节信息
        $condition = '';
        if($cid != ''){
          $condition = 'cid = '.$cid;
        }

        $rows = DB::select('wxsd_section', ['*'], $condition);

        //获取课程信息
        $condition = 'id = '.$cid;
        $courseData = DB::row('wxsd_course', ['*'], $condition);

        $this->json([
            'code' => 0,
            'data' => [
                'msg' => 'ok'
            ],
            'data' => $rows,
            'course' => $courseData
        ]);
    }

    public function section_detail() {

        $sid = $this->uri->segment(5, "");

        $condition = 'id = '.$sid;

        $rows = DB::row('wxsd_section', ['*'], $condition);

        $this->json([
            'code' => 0,
            'data' => [
                'msg' => 'Hello World'
            ],
            'data' => $rows,
            'sid' => $sid
        ]);
    }
}