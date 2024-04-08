<template>
    <div>
        <form v-on:submit.prevent="remove" action="" method="">
            <table>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="password" name="password" v-model="guest.password"></td>
                    <td><button type="submit">삭제</button></td>
                </tr>
            </table>
        </form>
        
        <br><br>
        <router-link to="/">메인리스트 이동</router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'DelForm',
        components: {},
        data(){ 
            return{
                guest: {
                    password: "",
                    no: this.$route.params.no
                }
            }
        },
        methods: {
            remove(){
                console.log(this.guest)

                axios({
                    method: 'delete', // put, post, delete 저장은 post로 한다
                    url: 'http://localhost:8888/list/'+this.guest.no,
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    // params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: {password: this.guest.password}, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                    }).then(response => {
                        console.log(response.data); //수신데이타

                        if(response.data == 1){
                            this.$router.push({ path: '/' })    //삭제후 원래의 리스트 화면으로 리다이렉트가 필요하기에 this.$router.push({ path: '/' }) 사용
                        }else{
                            alert("비밀번호가 틀렸습니다")      //정상적으로 삭제되어 '1'이 넘어오면 리다이렉트, 그렇지 않은경우 비밀번호 오류 메세지 출력
                        }   
                    }).catch(error => {
                        console.log(error);
                });
            }
        }
    }
</script>