FROM debian:jessie as homebrew

RUN apt-get update && apt-get install -y build-essential curl sudo

RUN useradd -ms /bin/bash node
USER node
WORKDIR /home/node

# https://docs.brew.sh/Homebrew-on-Linux#install
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"

RUN test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv) && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile && brew install pkg-config

FROM node

USER node
WORKDIR /home/node
COPY --from=homebrew /home/node .

COPY src/ .

# RUN eval $(~/.linuxbrew/bin/brew shellenv)
