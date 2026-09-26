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

export class DarkDragonite_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Dragonair";
  public hp: number = 120;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Trance", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Darkness Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Dark Dragonite is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Wing Attack", cost: [], damage: "", text: "Does 30 damage to each Defending Pokémon." },
      { name: "Claw Swipe", cost: [], damage: "50", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Dark Dragonite";
  public fullName: string = "Dark Dragonite TRR 15";
  public text: string = "Dark Dragonite";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
