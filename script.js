const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	const lists=new Array();
	let res=new Array();
	arr.forEach(a=>
		{
			if(sum+a<=n)
			{
				res.push(a);
				sum+=a;
			}
			else
			{
				lists.push(res);
				res=new Array();
				res.push(a);
				sum=a;
				
			}
		});
	lists.push(res);
	return lists;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
