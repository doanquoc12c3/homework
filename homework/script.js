
        let arr = [3,4,3,341,2523,4332,35,6,0];
        let arr2D = [[-1,-2,1],[-2,-3,2],[1,2,3,4]]

        
        function isInArray(){
            let num = parseInt(prompt('nhap vao mot so bat ki de kiem tra'))
            let index = -1;
            let isFound = false;
            for(let i = 0;i<arr.length;i++){
                if(num == arr[i]){
                    index = i;
                    isFound = true;
                    alert('so nay nam trong mang tai vi tri '+ index)
                    break;
                }
            }
            if(isFound == false){
                alert('khong co gia tri trong mang')
            }
        }

        function calMultiplication(){
            let result = 1;
            for(let i = 0; i<arr.length;i++){
                result = result*arr[i];
            }
            alert('Tich cua cac phan tu trong mang la '+ result)
        }

        function countNum(){
            let count = 0;
            let isFound = false;
            let num = parseInt(prompt('nhap vao gia tri bat ki de kiem tra'))
            for(let i = 0;i< arr.length;i++){
                if(num == arr[i]){
                    isFound = true;
                    count=count+1;
                }
            }
            if(isFound == true)
            alert(num+" xuat hien "+ count +" lan trong mang");
            else(
                alert('khong co gia tri nay trong mang')
            )
        }

        function sum2D_Array(){
            let sum = 0;
            for(let i = 0; i<arr2D.length; i++){
                for(let j = 0; j<arr2D[i].length;j++){
                    sum = sum + arr2D[i][j];
                }
            }
            alert('Tong cac phan tu tron mang la '+ sum)
        }

        function sumEachRow2D(){
            for(let i = 0; i<arr2D.length; i++){
                
                var sumRow = 0;
                for(let j = 0; j < arr2D[i].length; j++){
                    sumRow = sumRow + arr2D[i][j];
                }
                alert("tong cua hang thu "+ (i+1)+ " la "+ sumRow)
            }
        }
        
        function tranpose2D(arr) {
            var convertedArr = [];
            for (var i = 0; i < arr.length; ++i) {
                for (var j = 0; j < arr[i].length; ++j) {
                    if (arr[i][j] === undefined) {
                        continue;
                    }
                    if (convertedArr[j] === undefined) {
                        convertedArr[j] = [];
                    }
                    convertedArr[j][i] = arr[i][j];
                }
            }
            return convertedArr;
        }
        
        function sumEachCol2D(arr){
            let sum = 0;
            let newArr = tranpose2D(arr);
            for(let i = 0; i< newArr.length; i++){
                sum = 0;
                for(let j = 0; j< newArr[i].length;j++){
                    if(newArr[i][j]==undefined){continue;}
                    sum = sum + newArr[i][j];
                }
                
                alert('tong cua cot thu '+ (i+1)+ ' la '+ sum)
            }
        }

        function findMax(arr){
            let max;
            console.log(typeof max)
            let newArr = tranpose2D(arr);
            for(let i = 0; i< newArr.length; i++){
                max=newArr[i][0];
                for(let j = 0; j< newArr[i].length;j++){
                    if(max == undefined && typeof newArr[i][j]=='number'){
                        max = newArr[i][j];  
                    }
                    if(newArr[i][j]== undefined) continue;
                    if(newArr[i][j]> max){
                        max = newArr[i][j];
                    }
                }
                alert('gia tri lon nhat cua cot '+ (i +1)+ ' la '+ max)
            }
        }

        
