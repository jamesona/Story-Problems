// https://www.reddit.com/r/dailyprogrammer/comments/5bn0b7/20161107_challenge_291_easy_goldilocks_bear/

z=>z.split(/\s/).map((v,i,a)=>i%2==0&&a[i]*1>=a[0]&&a[i+1]*1<=a[1]?i/2:0).filter(v=>v).join(' ')
