FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get install -y \
    nano

RUN mkdir -p /backend

COPY requirements.yml /backend/requirements.yml
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/reveal/bin:$PATH

RUN echo "source activate reveal" >~/.bashrc

COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY . /backend

WORKDIR /backend
