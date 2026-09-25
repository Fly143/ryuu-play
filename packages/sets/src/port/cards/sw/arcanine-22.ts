import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Arcanine_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Growlithe";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flame Dash", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Arcanine from your hand to evolve 1 of your Benched Pokémon, you may switch Arcanine with 1 of your Active Pokémon. If you do, you may move any number of Energy cards attached to that Pokémon to Arcanine.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Inferno Onrush", cost: [], damage: "120", text: "Arcanine does 40 damage to itself." }
  ];
  public set: string = "SW";
  public name: string = "Arcanine";
  public fullName: string = "Arcanine SW 22";
  public text: string = "Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
