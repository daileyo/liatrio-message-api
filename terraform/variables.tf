variable "project" {
  default     = "gcp-proj-liatrio-message-api"
  description = "GCP project name for target environment"
}

variable "credentials_file" {
  default     = "../secrets/gcp.json"
  description = "Credentials needed for logging into GCP"
}

variable "region" {
  default     = "us-central1"
  description = "Target region for deployment of environment"
}

variable "zone" {
  default     = "us-central1-a"
  description = "Target zone for deployment of environment"
}

variable "gke_node_count" {
  default     = 2
  description = "Number of nodes to configure for the K8 cluster"
}

