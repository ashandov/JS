describe("pow", function() {

   //before(()=> alert('Testing has been began - before tests'));
   // after(()=> alert('Testing has been finished - after tests'));

   // beforeEach(()=>alert('Before each test - began to execute'));   
   // afterEach(()=>alert('Adter each test - end of execution'));

   it("3 in power of 3 equal 9", function(){
      assert.equal(pow(3,2), 9);   
   });

   it("4 in power of 3 equal 64", function(){
      assert.equal(pow(4,3), 63);   
   });
   describe("power x in degree of 3 ", function() {

      function powNumber(x){
         let expected=x**3;
         it(` ${x}in power of 3 equal ${expected}`, function() {

            assert.equal(pow(x,3), expected);   
         
         });
      }  
      for(let i=1;i<=5;i++){
         powNumber(i);
      }
   });

   it("for negative numbers returns NaN", function(){
      assert.isNaN(pow(2,-1));
   });

   it("for fractional numbers returns NaN", function(){
      assert.isNaN(pow(4,2.3));
   });

   
});


