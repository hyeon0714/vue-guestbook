<template>
    <div>
        <form v-on:submit.prevent="addGuest" action="" method="">
            <table border="1" width="540px">
                <tr>
                    <td>이름</td>
                    <td><input type="text"  name="name" v-model="guestbookVo.name"></td>
                    <td>비밀번호</td>
                    <td><input type="password" name="password" v-model="guestbookVo.password"></td>
                </tr>
                <tr>
                    <td colspan="4"><textarea name="content" v-model="guestbookVo.content" cols="72" rows="5" ></textarea></td>
                </tr>
                <tr>
                    <td colspan="4"><button type="submit">등록</button></td>
                </tr>
            </table>
        </form>
        <br>
        <div v-bind:key="i" v-for="(guestVo, i) in guestbookList">
            <table border="1" width="540px">
                <tr>
                    <td>[{{i+1}}]</td>
                    <td>[{{guestVo.name}}]</td>
                    <td>[{{guestVo.regDate}}]</td>
                    <td><RouterLink v-bind:to="`/del/${guestVo.no}`">삭제</RouterLink></td>
                </tr>
                <tr>
                    <td colspan="4">{{ guestVo.content }}</td>
                </tr>
            </table>
            <br>
        </div>

        
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'AddList',
        components: {},
        data(){
            return{
                guestbookList: [],
                guestbookVo: {
                    name: "",
                    password: "",
                    content: ""
                }
            }
        },
        methods: {
            list(){
                console.log("클릭");
                axios({
                    method: 'get', // put, post, delete 
                    url: 'http://localhost:8888/guestbook7/list',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    // params: guestbookVo, //get방식 파라미터로 값이 전달
                    // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                    }).then(response => {
                        console.log(response); //수신데이타
                        this.guestbookList = response.data
                        console.log(this.guestbookList[0])

                    }).catch(error => {
                        console.log(error);
                });
            },
            addGuest(){
                console.log("저장");
                console.log(this.guestbookVo);
                axios({
                    method: 'post', // put, post, delete 저장은 post로 한다
                    url: 'http://localhost:8888/guestbook7/list',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    // params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: this.guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                    }).then(response => {
                        console.log(response.data); //수신데이타
                        this.guestbookList.unshift(response.data)
                        //unshift()는 배열의 가장 앞에 넣는다
                        //push()는 배열의 가장 뒤에 넣는다


                    }).catch(error => {
                        console.log(error);
                });
            }
        },
        created() {
            this.list();
        }

    }
</script>