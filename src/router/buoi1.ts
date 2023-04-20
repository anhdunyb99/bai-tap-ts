import express from 'express'

import { sumInt , totalSum , Multiples , Rectangle , Globular , dateExecrise , Time , bigNumber , biggestNumber , Condition , conditionDate , phoneFee , Fibonacci , Reverse  , reverseNumber , biggestNumberOfArray , numberArray , primeNumber , printPrime , Prime} from '../controllers/buoi1'

export default (router: express.Router) => {
    router.get('/execrise/sum-int',sumInt)
    router.get('/execrise/total-sum',totalSum)
    router.get('/execrise/multiples',Multiples)
    router.get('/execrise/rectangle',Rectangle)
    router.get('/execrise/globular',Globular)
    router.get('/execrise/date',dateExecrise)
    router.get('/execrise/time',Time)
    router.get('/execrise/big-number',bigNumber)
    router.get('/execrise/biggest-number',biggestNumber)
    router.get('/execrise/condition',Condition)
    router.get('/execrise/condition-date',conditionDate)
    router.get('/execrise/phone',phoneFee)
    router.get('/execrise/fibonacci',Fibonacci)
    router.get('/execrise/reverse ',Reverse )
    router.get('/execrise/reverse-number',reverseNumber)
    router.get('/execrise/number-array',biggestNumberOfArray)
    router.get('/execrise/array',numberArray)
    router.get('/execrise/prime-number',primeNumber)
    router.get('/execrise/print-prime',printPrime)
    router.get('/execrise/prime',Prime)
  };