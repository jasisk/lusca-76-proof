Proof of exploit for lusca#76

To view exploit:

1. `npm start`
2. Visit [http://127.0.0.1:8000](http://127.0.0.1:8000). You'll see 'isSecure: true'.
3. now, in another tab: `npm run exploit-server`
4. visit [http://127.0.0.1:8080](http://127.0.0.1:8080). Different port means different origin but feel free to add a hosts entry for absolute certainty. You'll be forwarded back to the original app but now you'll see `isSecure: false`. We just triggered an action on behalf of the user from another domain (which is precisely what csrf is intended to prevent against).
