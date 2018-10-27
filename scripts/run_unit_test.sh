for testFile in ../test/*.js
do
  echo running test for $testFile
  node $testFile
done
