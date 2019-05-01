FROM gitpod/workspace-full

USER root
RUN echo "application/wasm wasm" >> /etc/mime.types