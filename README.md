# Clipbit

## Build Status: Ready to Integrate

## Introduction

Clipbit is designed to provide effortless clipboard integration for React applications. It's lightweight, with no dependencies, making it an ideal choice for developers looking to add clipboard functionality to their projects without the overhead of additional libraries.

## Demo

## Why

In today's web development landscape, copying text to the clipboard should be straightforward and efficient. It shouldn't require complex setups or heavy dependencies. That's exactly what the Clipbit package offers.

## Installation

To integrate Clipbit into your project, simply use npm: npm install @clipbit --save

## Getting Started

To begin using Clipbit, import it into your React component: import Clipbit from "@clipbit";

Then, wrap the text you wish to copy with the Clipbit component, for example: <Clipbit>npm i @heroicons/react</Clipbit>

This setup is all you need to enable clipboard functionality for your text.

## Usage

Clipbit is designed with simplicity and flexibility in mind. You can easily integrate it into your React applications without altering your existing codebase.

### Copy Text from Children

The most straightforward use case is copying text directly from the children of the Clipbit component. This is achieved by simply passing the text you wish to copy as children to the Clipbit component.

### Feedback and Events

To enhance user experience, Clipbit provides feedback on successful copy operations. You can listen to the 'success' event to implement custom logic, such as displaying a confirmation message.

### Customization and Advanced Options

While Clipbit is designed to be straightforward, it also offers advanced options for customization. You can dynamically set targets or customize the appearance of the clipboard button.
