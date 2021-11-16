#!/bin/bash

export WEB3_RPC_URL=https://rinkeby.infura.io/v3/64fa77a39b9a4c31b186fb2148edff70
export WEB3_PRIVATE_KEY=$5


web3 generate contract erc721 --symbol $1 --name $2 --base-uri https://protomock.com:5000/item/view/$1/
web3 contract build $3
web3 contract deploy $4
