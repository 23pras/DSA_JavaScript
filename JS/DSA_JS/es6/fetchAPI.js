async function getCommentsByUserId(userId) {
      let promiseObj = await fetch('/api/comments');
      let jsonData = await promiseObj.json();
      let newArr = [];
       jsonData.forEach((ele) => {
          if(ele.userId===userId){
          newArr.push(ele.data);
          }
       
          })
      return newArr
}

// ----------- Don't modify -----------
const mockFetch = (url, responseData) => {
    const mockJsonPromise = Promise.resolve(responseData);
    const mockFetchPromise = (callUrl) => {
        if (url === callUrl) {
            return Promise.resolve({
                json: () => mockJsonPromise
             });
        } else {
            return Promise.reject('404: No such url')
        }
    }
    global.fetch = mockFetchPromise;
}

const successResponse = [
    {
        'userId': '1',
        "data": 'This looks slick!'
    },
    {
        'userId': '2',
        "data": 'I think this can be improved.'
    },
    {
        'userId': '1',
        "data": 'What kind of improvement?'
    }];
mockFetch('/api/comments', successResponse);

module.exports = getCommentsByUserId;
// ----------- Don't modify -----------

getCommentsByUserId("1").then((res) => {
  console.log(res);
});