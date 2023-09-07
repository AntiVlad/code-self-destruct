# code self destruct
 A python and javascript program to auto delete/self destruct a program in the case where a client tries to avoid payment


![Python](https://img.shields.io/badge/python-3.8%2B-blue)

## Overview

Its basically a set of backdoors that are programmed to provide a basic level of one-time control over program execution based on remote responses․ It allows you to remotely influence the behavior of your program by responding to HTTP requests In particular it responds to a 401 HTTP status code to take actions such as deleting the script or something else.

## Usage

1. Clone the repository:

   ```shell
   git clone https://github.com/AntiVlad/code-self-destruct.git
   cd code-self-destruct
   python main.py
   ```
   for python
   ### OR
   ```shell
   git clone https://github.com/AntiVlad/code-self-destruct.git
   cd code-self-destruct
   node main.js
   ```
   for node
