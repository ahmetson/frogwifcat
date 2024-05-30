<p align="center">
  <a href="https://www.frogwifcat.com/">
    <img alt="FROGWIFCAT" style="width: 200px" src="https://pbs.twimg.com/profile_images/1781255217277018112/08IKgGV1_400x400.jpg"/>
  </a>
</p>

<p align="center">
  <a href="https://www.frogwifcat.com" style="color: #a77dff">Website</a> | <a href="https://linktr.ee/frogwifcat" style="color: #a77dff">Links</a>
</p>

<h1 align="center">FROGWIFCAT (WEF)</h1>

<p align="center">WEF token deployed accross multiple blockchains using <code>LayerZero</code> technology.

## 1) Developing Contracts

#### Installing dependencies

We recommend using `pnpm` as a package manager (but you can of course use a package manager of your choice):

```bash
pnpm install
```

#### Compiling your contracts

This project supports both `hardhat` and `forge` compilation. By default, the `compile` command will execute both:

```bash
pnpm compile
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm compile:forge
pnpm compile:hardhat
```

Or adjust the `package.json` to for example remove `forge` build:

```diff
- "compile": "$npm_execpath run compile:forge && $npm_execpath run compile:hardhat",
- "compile:forge": "forge build",
- "compile:hardhat": "hardhat compile",
+ "compile": "hardhat compile"
```

#### Running tests

Similarly to the contract compilation, we support both `hardhat` and `forge` tests. By default, the `test` command will execute both:

```bash
pnpm test
```

If you prefer one over the other, you can use the tooling-specific commands:

```bash
pnpm test:forge
pnpm test:hardhat
```

Or adjust the `package.json` to for example remove `hardhat` tests:

```diff
- "test": "$npm_execpath test:forge && $npm_execpath test:hardhat",
- "test:forge": "forge test",
- "test:hardhat": "$npm_execpath hardhat test"
+ "test": "forge test"
```

## 2) Deploying Contracts

Set up deployer wallet/account:

- Rename `.env.example` -> `.env`
- Choose your preferred means of setting up your deployer wallet/account:

```
MNEMONIC="test test test test test test test test test test test junk"
or...
PRIVATE_KEY="0xabc...def"
```

- Fund this address with the corresponding chain's native tokens you want to deploy to.

To deploy your contracts to your desired blockchains, run the following command in your project's folder:

```bash
npx hardhat lz:deploy
```

More information about available CLI arguments can be found using the `--help` flag:

```bash
npx hardhat lz:deploy --help
```

By following these steps, you can focus more on creating innovative omnichain solutions and less on the complexities of cross-chain communication.

<br></br>

<p align="center">
  Join our community on <a href="https://discord.gg/en2jdjuZPN" style="color: #a77dff">Discord</a> | Follow us on <a href="https://x.com/frogwifcat" style="color: #a77dff">Twitter</a>
</p>
