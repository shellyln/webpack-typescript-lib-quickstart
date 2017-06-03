#!/bin/bash


DEPLOY_ARCHIVE_DIR="/tmp/heroku-deploy/$CODEBUILD_LOG_PATH"
mkdir -p "$DEPLOY_ARCHIVE_DIR"
( cd $CODEBUILD_SRC_DIR ; tar -czf "$DEPLOY_ARCHIVE_DIR/deploy.tgz" . )
