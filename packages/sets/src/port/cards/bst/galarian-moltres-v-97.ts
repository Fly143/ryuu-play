import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GalarianMoltresV_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Direflame Wings", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Darkness Energy card from your discard pile to this Pokémon. You can't use more than 1 Direflame Wings Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aura Burn", cost: [], damage: "190", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "BST";
  public name: string = "Galarian Moltres V";
  public fullName: string = "Galarian Moltres V BST 97";
  public text: string = "Galarian Moltres V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
