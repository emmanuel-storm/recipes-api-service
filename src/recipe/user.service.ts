// recipe/user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// Interface pour les informations de l'utilisateur
interface User {
  id: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  // Remplace ce tableau factice par une véritable base de données ou une source de données pour les utilisateurs
  private readonly users: User[] = [
    {
      id: 'user1',
      email: 'user1@example.com',
      password: '$2b$10$7X8aH6l5r0xzOMJn0soH3OoqB/fc49EkZyERIuxkKmjLjO.xQgH8G', // Le mot de passe est "password1"
    },
  ];

  // Méthode pour l'authentification de l'utilisateur
  authenticateUser(email: string, password: string): boolean {
    // Recherche l'utilisateur par son email
    const user = this.users.find((user) => user.email === email);

    // Vérifie si l'utilisateur existe
    if (!user) {
      return false;
    }

    // Vérifie si le mot de passe correspond en utilisant une librairie de hachage (comme bcrypt)
    // Compare le mot de passe fourni avec le mot de passe haché enregistré dans la base de données
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    return isPasswordValid;
  }

  // Méthode pour récupérer les informations de l'utilisateur à partir de son identifiant
  getUserById(userId: string): User {
    // Recherche l'utilisateur par son identifiant
    const user = this.users.find((user) => user.id === userId);

    // Vérifie si l'utilisateur existe
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Retourne les informations de l'utilisateur
    return user;
  }
}
