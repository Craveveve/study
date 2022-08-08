let sql = require('./sql.js');
// 데이터베이스 쿼리문이 작성된 파일

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {   // sql.js 파일에 변경이 발생했는지 감시, 발새 시 콜백 리스너 함수 실행 
    console.log('sql 변경 시 재시작 없이 반영되도록 함');
    delete require.cache[require.resolve('./sql.js')];  // 캐시에 저장되어 있는 파일 삭제
    sql = require('./sql.js');                          // sql.js 재할당 
})