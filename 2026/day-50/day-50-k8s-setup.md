# Day 50 – Kubernetes Architecture and Cluster Setup

## Task 1: Recall the Kubernetes Story
Before touching a terminal, write down from memory:

### 1. Why was Kubernetes created? What problem does it solve that Docker alone cannot?

- Docker runs containers but doesn't manage them across multiple servers.
- Kubernetes was created to orchestrate containers at scale.
- It provides:
  - Auto Scaling
  - Auto Healing
  - Load Balancing
  - Rolling Updates
  - Service Discovery
  - Cluster Management

> **In short:** Docker runs containers, Kubernetes manages containers.

### 2. Who created Kubernetes and what was it inspired by?

- Kubernetes was created by **Google**.
- Inspired by Google's internal system **Borg**.
- Open-sourced in **2014**.
- Now maintained by the **Cloud Native Computing Foundation (CNCF).**

### 3. What does the name "Kubernetes" mean?

- Kubernetes is a Greek word.
- It means **"Helmsman"** or **"Captain of a Ship."**
- It represents managing and steering containers across a cluster.

---

## Task 2: Draw the Kubernetes Architecture
From memory, draw or describe the Kubernetes architecture. Your diagram should include:

**Control Plane (Master Node):**
- API Server — the front door to the cluster, every command goes through it
- etcd — the database that stores all cluster state
- Scheduler — decides which node a new pod should run on
- Controller Manager — watches the cluster and makes sure the desired state matches reality

**Worker Node:**
- kubelet — the agent on each node that talks to the API server and manages pods
- kube-proxy — handles networking rules so pods can communicate
- Container Runtime — the engine that actually runs containers (containerd, CRI-O)

![Kubernetes Architecture](ss/k8s-architecture.png)

After drawing, verify your understanding:

### 🔹 What happens when you run `kubectl apply -f pod.yaml`?

- `kubectl` reads the `pod.yaml` file and sends the request to the Kubernetes **API Server**.
- The **API Server** authenticates, authorizes, and validates the request.
- If valid, the Pod object is stored in **etcd**.
- The **Scheduler** detects the unscheduled Pod and assigns it to a Worker Node.
- The **Kubelet** on the selected node receives the Pod specification from the API Server.
- The **Container Runtime** (e.g., containerd) pulls the image (if needed) and starts the container.
- The Pod status is updated to **Running** in the API Server.

### 🔹 What happens if the API Server goes down?

- `kubectl` commands and API requests stop working.
- Running Pods and Services continue working.
- No new Pods, Deployments, or scheduling can occur.
- Self-healing and cluster management are temporarily unavailable.

### 🔹 What happens if a Worker Node goes down?

- Pods running on that node become unavailable.
- Kubernetes detects the node failure and marks it **NotReady**.
- If the Pods are managed by a Deployment or ReplicaSet, replacement Pods are scheduled on healthy Worker Nodes.
- Traffic is automatically routed only to healthy Pods.

---
